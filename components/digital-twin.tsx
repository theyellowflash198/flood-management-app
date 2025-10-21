"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface DigitalTwinProps {
  isPlaying: boolean
  floodLevel: number
  setFloodLevel: (level: number) => void
}

export default function DigitalTwin({ isPlaying, floodLevel, setFloodLevel }: DigitalTwinProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const waterRef = useRef<THREE.Mesh | null>(null)
  const animationIdRef = useRef<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x87ceeb)
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(0, 15, 20)
    camera.lookAt(0, 0, 0)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.shadowMap.enabled = true
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 20, 10)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    scene.add(directionalLight)

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(40, 40)
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x8b7355 })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    scene.add(ground)

    // Buildings
    const buildingPositions = [
      { x: -8, z: -8, width: 3, height: 8, depth: 3 },
      { x: 8, z: -8, width: 3, height: 6, depth: 3 },
      { x: -8, z: 8, width: 3, height: 10, depth: 3 },
      { x: 8, z: 8, width: 3, height: 7, depth: 3 },
      { x: 0, z: 0, width: 4, height: 12, depth: 4 },
    ]

    buildingPositions.forEach((pos) => {
      const buildingGeometry = new THREE.BoxGeometry(pos.width, pos.height, pos.depth)
      const buildingMaterial = new THREE.MeshPhongMaterial({ color: 0xcccccc })
      const building = new THREE.Mesh(buildingGeometry, buildingMaterial)
      building.position.set(pos.x, pos.height / 2, pos.z)
      building.castShadow = true
      building.receiveShadow = true
      scene.add(building)
    })

    // Water
    const waterGeometry = new THREE.PlaneGeometry(40, 40)
    const waterMaterial = new THREE.MeshPhongMaterial({
      color: 0x0099ff,
      transparent: true,
      opacity: 0.7,
      wireframe: false,
    })
    const water = new THREE.Mesh(waterGeometry, waterMaterial)
    water.rotation.x = -Math.PI / 2
    water.position.y = -20
    water.receiveShadow = true
    scene.add(water)
    waterRef.current = water

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)

      if (isPlaying) {
        setFloodLevel((prev) => {
          const newLevel = prev + 0.5
          return newLevel > 100 ? 100 : newLevel
        })
      }

      // Update water level
      if (waterRef.current) {
        const waterHeight = (floodLevel / 100) * 15 - 20
        waterRef.current.position.y = waterHeight
      }

      // Rotate camera slightly for better view
      camera.position.x = Math.sin(Date.now() * 0.0001) * 25
      camera.position.z = Math.cos(Date.now() * 0.0001) * 25
      camera.lookAt(0, 5, 0)

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      renderer.dispose()
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [isPlaying, floodLevel, setFloodLevel])

  return <div ref={containerRef} className="w-full h-96 rounded-lg overflow-hidden border border-gray-200 bg-sky-100" />
}
