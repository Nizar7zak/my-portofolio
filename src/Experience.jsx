import { Center, Environment, useGLTF, OrbitControls } from '@react-three/drei'

export default function Experience(){
    const laptop = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    return <>
        <Environment preset='city' />
        <color args={ [ '#241a1a' ] } attach='background' />
        <OrbitControls makeDefault />
        
        <Center>
            <primitive object={laptop.scene} />
        </Center>

    </>
}