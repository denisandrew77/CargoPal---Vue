const ws = new WebSocket('ws://localhost:8080')

ws.onopen = (ws) => {
    console.log(`Connected to server: ${ws}`)
}
import { useOrderStatus } from "./stores/orderStatus"
ws.onmessage = (data) => {
    const store = useOrderStatus();
    console.log(`Message from server: ${data}`)
}