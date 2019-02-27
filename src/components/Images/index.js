import React from "react";
import library from "./img/library.jpg";
import bead from "./img/beadcurtain.jpg";
import tinfoil from "./img/tinfoil.jpg";
import letsplay from "./img/letsplay.jpg";

export function Library() {
    return (
                <img className="img-fluid" alt="Rage's Library" src={library} />
    );
};
export function Bead() {
    return (
                <img className="img-fluid" alt=" " src={bead} />
    );
};
export function Tinfoil() {
    return (
                <img className="img-fluid" alt="" src={tinfoil} />
    );
};
export function Letsplay() {
    return (
                <img className="img-fluid" alt="" src={letsplay} />
    );
};