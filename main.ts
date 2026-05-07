enum SentidoMovimiento {
    //% block="avanzando"
    Avanzando,
    //% block="retrocediendo"
    Retrocediendo
}

enum LadoGiro {
    //% block="derecha"
    Derecha,
    //% block="izquierda"
    Izquierda
}

//% weight=100 color=#0fbc11 icon="\uf1b9" block="RoMaqueen"
namespace maqueenFacil {

    /**
     * Hace girar el coche Maqueen avanzando o retrocediendo hacia un lado.
     */
    //% block="girar %sentido hacia %lado"
    //% weight=100
    export function girar(sentido: SentidoMovimiento, lado: LadoGiro): void {

        let velocidad = 80

        if (sentido == SentidoMovimiento.Avanzando && lado == LadoGiro.Derecha) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
            maqueen.motorStop(maqueen.Motors.M2)
        }

        if (sentido == SentidoMovimiento.Avanzando && lado == LadoGiro.Izquierda) {
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
        }

        if (sentido == SentidoMovimiento.Retrocediendo && lado == LadoGiro.Derecha) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, velocidad)
            maqueen.motorStop(maqueen.Motors.M2)
        }

        if (sentido == SentidoMovimiento.Retrocediendo && lado == LadoGiro.Izquierda) {
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, velocidad)
        }
    }
}