import { OrbitControls } from '@react-three/drei'
import Cube from "./Cube";
import { useControls, button } from "leva";

export default function Experience() {
    const {position, color, visible} = useControls('sphere', {
        position: {
            value: {
                x: -2,
                y: 0,
        },
            step: 0.01,
            joystick: 'invertY'
        },
        color: '#ff0000',
        visible: true,
        clickMe: button(() => {
            console.log('clicked');
        }),
        choices: { options: ['a', 'b', 'c'] }
    })

    const { scale } = useControls('cube', {
        scale: {
            value: 1,
            min: 0.5,
            max: 2,
            step: 0.01,
        },
    })

    return <>

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh position={ [ position.x, position.y, 0] } visible={ visible }>
            <sphereGeometry />
            <meshStandardMaterial color={color} />
        </mesh>

        <Cube scale={scale} />

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}
