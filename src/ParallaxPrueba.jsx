import React from 'react'
import cat from "./assets/cat.jpg"
import tree from "./assets/tree.jpg"
import montain from "./assets/montain.jpg"
import { Parallax } from 'react-parallax'

/* Strength quiere decir la fuerza del efecto , mientras mas pequeño el numero menos efecto notorio tendra */

const ParallaxPrueba = () => {
  return (
    <div className='App'>
        <Parallax strength={600} bgImage={cat}> {/* Para dar el tamaño , se lo damos por css */}
            <div className="content">
                <div className="text-content">
                    Normal Parallax
                </div>
            </div>
        </Parallax>
        <Parallax strength={300} blur={{min: -5, max:15}} bgImage={tree}> {/* Para dar el tamaño , se lo damos por css */}
            <div className="content">
                <div className="text-content">
                    Blur Parallax
                </div>
            </div>
        </Parallax>
        <Parallax strength={-600} bgImage={montain}> {/* Para dar el tamaño , se lo damos por css */}
            <div className="content">
                <div className="text-content">
                    Reverse Parallax
                </div>
            </div>
        </Parallax>
    </div>
  )
}

export default ParallaxPrueba