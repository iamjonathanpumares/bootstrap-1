export default {
    namespaced: true,
    state: {
        frutasState: [
            { id: 1, nombre: 'Manzana', cantidad: 0 },
            { id: 2, nombre: 'Pera', cantidad: 0 },
            { id: 3, nombre: 'Naranja', cantidad: 0 }
        ]
    },
    mutations: {
        aumentar(state, index) {
            state.frutasState[index].cantidad++
        },
        reiniciar(state) {
            state.frutasState.forEach(item => item.cantidad = 0)
        }
    }
}