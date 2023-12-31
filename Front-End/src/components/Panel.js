import React from 'react'
import GridImages from './GridImages'
import CardImages from './CardImages'

export default function Panel(props) {
    return (
    <div className="container-fluid d-flex flex-row">
        <div className="container-fluid d-flex flex-column justify-content-around w-25 m-3">
            <div className="container-fluid flex-wrap">
                <div className="row justify-content-md-center text-center">
                    <div className="col">
                        <b>Bad Images</b>
                    </div>
                </div>
                <GridImages index={0} type="bad" dataset={props.dataset} update={props.update}/>
                <GridImages index={3} type="bad" dataset={props.dataset} update={props.update}/>
                <GridImages index={6} type="bad" dataset={props.dataset} update={props.update}/>
            </div>
            <div className="d-flex justify-content-around" style={{border: "1px solid grey"}}></div>    
            <div className="container-fluid flex-wrap mt-1">
                <div className="row justify-content-md-center text-center">
                    <div className="col">
                        <b>Good Images</b>
                    </div>
                </div>
                <GridImages index={0} type="good" dataset={props.dataset} update={props.update}/>
                <GridImages index={3} type="good" dataset={props.dataset} update={props.update}/>
                <GridImages index={6} type="good" dataset={props.dataset} update={props.update}/>
            </div>
        </div> 
        <div className="d-flex justify-content-around" style={{border: "2px solid grey", height: "70vh", marginTop: "12vh"}}></div>
        <div className="container-fluid flex-column d-flex m-3 w-75">
            <div className="container-fluid d-flex border border-success border-1  justify-content-around text-center pt-2 pb-2">
                <CardImages body="Confidence" path={props.dropoutPath+0+".png"} height="175"/>
                <CardImages body="Accuracy" path={props.dropoutPath+1+".png"} height="175"/>
                <CardImages body="Accuracy  vs  Confidence" path={props.dropoutPath+2+".png"} height="175"/>
            </div>
            <div className="container-fluid d-flex border border-success border-1 justify-content-around text-center mt-1 pt-2 pb-2">
                <CardImages body="Adversarial Image" path={props.path}/>
                <CardImages body={`Activation Layer ${props.layer+1}`} path={props.path.slice(0, -4) + `-${props.layer}.png`}/>
                <CardImages align="end" body="" path={props.path.slice(0, -4) + "_" + props.path.slice(-5).split('.')[0] + "_adver.png"}/>
            </div>
            <div className="container-fluid d-flex border border-success border-1 justify-content-around text-center pb-2 pt-2 mt-1">
                <CardImages body="Real Image" path={props.realPath}/>
                <CardImages body={`Activation Layer ${props.layer+1}`} path={props.realPath.slice(0, -4) + `-${props.layer}.png`}/>
                <CardImages align="end" body="" path={props.path.slice(0, -4) + "_" + props.path.slice(-5).split('.')[0] + "__orig.png"}/>
            </div>
        </div>
    </div>
    )
}

Panel.defaultProps = {
    layer: "0"
}