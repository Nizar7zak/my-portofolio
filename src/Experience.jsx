import { 
    Text,
    Html,
    ContactShadows,
    Float, 
    Environment, 
    useGLTF, 
    PresentationControls,
    Sky
} from '@react-three/drei'

export default function Experience(){
    const laptop = useGLTF('./model.gltf')
    return <>

        <Environment 
            files={'./hh.hdr'}
        />
        <Sky />
        <color args={ [ '#241a1a' ] } attach='background' />
        <PresentationControls
            global
            rotation={[ 0.13, 0.1, 0 ]}
            polar={[ -0.4, 0.2 ]}
            azimuth={[ -1, 0.75 ]}
            config={{ mass: 2, tension: 400}}
            // snap={{ mass:4, tension: 400 }}
        >
            <Float rotationIntensity={ 0.4 }>
                <rectAreaLight 
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'rgb(212, 0, 255)'}
                    rotation={[ 0.1, Math.PI, 0 ]}
                    position={[ 0, 0.55, -1.15 ]}
                />
                <primitive 
                    object={laptop.scene} 
                    position-y = { -1.2 }
                >
                    <Html 
                        transform
                        wrapperClass='htmlScreen'
                        distanceFactor={1.17}
                        position={ [ 0, 1.56, -1.4] }
                        rotation-x = { -0.256 }
                    >
                        <iframe src='./portofolio/index.html' />
                    </Html>
                </primitive>
            
                <Text
                    font='./bangers-v20-latin-regular.woff'
                    fontSize={1}
                    position={[ 2, 0.75, 0.9 ]}
                    rotation-y={-1.25}
                    children={'Nizar\rZakout'}
                    textAlign='center'
                    maxWidth={2}
                    color="rgba(100,0,255,0)"
                >
                </Text>

            </Float>
        </PresentationControls>
        <ContactShadows 
            position-y={ -1.4 } 
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}