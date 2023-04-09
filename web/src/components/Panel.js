import React from 'react'
import GridImages from './GridImages'

export default function Panel(props) {
    return (
    <div className="container-fluid d-flex flex-row">
        <div className="container-fluid d-flex flex-column w-25 m-3">
            <div className="container-fluid flex-wrap">
                <div className="row justify-content-md-center text-center">
                    <div className="col">
                        <b>Bad Images</b>
                    </div>
                </div>
                <GridImages l1={props.path} l2={props.path} l3={props.path}/>
                <GridImages l1={props.path} l2={props.path} l3={props.path}/>
                <GridImages l1={props.path} l2={props.path} l3={props.path}/>
            </div>
            <div className="container-fluid flex-wrap mt-5">
                <div className="row justify-content-md-center text-center">
                    <div className="col">
                        <b>Good Images</b>
                    </div>
                </div>
                <GridImages l1={props.path} l2={props.path} l3={props.path}/>
                <GridImages l1={props.path} l2={props.path} l3={props.path}/>
                <GridImages l1={props.path} l2={props.path} l3={props.path}/>
            </div>
        </div>
        <hr className="bg-danger border-2 border-top border-danger"/>
        <div className="container-fluid d-flex w-75">

        </div>
    </div>
    )
}
