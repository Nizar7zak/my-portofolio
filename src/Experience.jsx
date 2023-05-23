import { useGLTF, OrbitControls } from '@react-three/drei'

export default function Experience(){
    const laptop = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    console.log(laptop)
    return <>

        <color args={ [ '#241a1a' ] } attach='background' />
        <OrbitControls makeDefault />
        
        <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>
        <primitive object={laptop.scene} />

    </>
}