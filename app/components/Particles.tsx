import { useCallback, useMemo } from 'react'
// import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import dynamic from 'next/dynamic'
const Particles = dynamic(() => import('react-tsparticles'), { ssr: false })
function Particle() {
  const particlesInit = useCallback(async (engine: any) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: any) => {
    // await console.log(container)
  }, [])
  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'connect',
          },
          onHover: {
            enable: true,
            mode: 'connect',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 200,
            duration: 0.8,
          },
        },
      },
      particles: {
        color: {
          value: ['#24e0ff', '#e2e603', '#f0a'],
        },
        links: {
          color: ['#691eff'],
          distance: 50,
          enable: true,
          opacity: 0.8,
          width: 0.6,
        },
        collisions: {
          // enable: true,
        },
        move: {
          directions: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: true,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 300,
        },
        opacity: {
          value: 0.6,
          random: false,
          animation: {
            enable: true,
            speed: 1.5,
            minimumValue: 0.1,
            sync: false,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 0.8, max: 2.5 },
          random: true,
          animation: {
            enable: true,
            speed: 1.5,
            minimumValue: 0.1,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }
  }, [])
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="-z-20"
    />
  )
}

export default Particle
