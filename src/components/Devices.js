import { useState } from 'react';
import '../styles/devices.css';
import { Tooltip } from 'react-tooltip'

const Devices = ({ devices, setDevices }) => {

    const [selectedDevice, setSelectedDevice] = useState(
        {
            "description": "Dispositivo que conecta",
            "title": "Router",
            "layer_number": "3",
            "layer_title": "Capa de Red",
            "image": "https://i.blogs.es/3f89a3/41vupqun30l._sl500_/original.jpeg",
            "brands": [
                {
                    "title": "Cisco",
                }
            ],
            "ports": [
                {
                    "title": "Puerto 35"
                }
            ],
            "compatible_brands": [
                {
                    "title": "Cisco"
                }
            ]
        }
    )

    return (
        <>
            <div className='gallery-container'>
                <h2 className='subtitle'>Dispositivos</h2>
                <div className='devices-gallery-container'>
                    {devices.devices.layers.map((layer, i) => {
                        return (
                            <div key={i} className='layer-container'>
                                <div key={i} className='layer-title'>
                                    <b>Capa {layer.number}: {layer.title}</b>
                                </div>
                                <div key={i} className='layer-item-container'>
                                    {layer.devices.map((device, i) =>{
                                        return (
                                            <span key={i} className='span' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <b className='device-title'>{device.title}</b>
                                                <img src={"https://i.blogs.es/3f89a3/41vupqun30l._sl500_/original.jpeg"} width={100} height={100} />
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" style={{ color: "white" }}>
                    <div class="modal-content">
                        <div class="modal-header" style={{ display: "flex", flexDirection: 'column', alignItems: "flex-start" }}>
                            <h3 class="modal-title fs-3" id="exampleModalLabel">{selectedDevice.title}</h3>
                            <h4 class="modal-title fs-5" id="exampleModalLabel">Capa {selectedDevice.layer_number}: {selectedDevice.layer_title}</h4>
                        </div>
                        <div class="modal-body">
                            <div style={{ display: "flex", justifyContent: 'center' }}>
                                <img src={"https://i.blogs.es/3f89a3/41vupqun30l._sl500_/original.jpeg"}
                                    width={200} height={200}
                                />
                            </div>
                            <h4 class="modal-title fs-5" id="exampleModalLabel">Descripcion</h4>
                            <p class="modal-title " id="exampleModalLabel">{selectedDevice.description}</p>

                            <h4 class="modal-title fs-5" id="exampleModalLabel">Marcas fabricadas</h4>
                            {
                                selectedDevice.brands.map((brand, i) => {
                                    return (
                                        <p class="modal-title " id="exampleModalLabel"> {brand.title},</p>
                                    )
                                })
                            }

                            <h4 class="modal-title fs-5" id="exampleModalLabel">Puertos/Protocolos</h4>
                            {
                                selectedDevice.ports.map((port, i) => {
                                    return (
                                        <p class="modal-title " id="exampleModalLabel">{port.title}</p>
                                    )
                                })
                            }

                            <h4 class="modal-title fs-5" id="exampleModalLabel">Marcas compatibles</h4>
                            {
                                selectedDevice.compatible_brands.map((comp, i) => {
                                    return (
                                        <p class="modal-title " id="exampleModalLabel">{comp.title}</p>
                                    )
                                })
                            }
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Devices;