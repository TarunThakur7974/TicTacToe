import React from 'react'
import style from './Tic.module.css'

export default function TicTacToe(props) {
    document.title = "TicTacToe"

    let blbt = {
        borderLeft: 'none',
        borderTop: 'none'
    }
    let bbbr = {
        borderRight: "none",
        borderBottom: 'none'

    }
    let br = {
        borderRight: "none"
    }
    let bt = {
        borderTop: 'none'
    }
    let bl = {
        borderLeft: 'none'
    }
    let bb = {
        borderBottom: 'none'
    }
    let blbb = {
        borderLeft: 'none',
        borderBottom: 'none'
    }
    let brbt = {
        borderRight: "none",
        borderTop: 'none'
    }
    let sum = -1;
    // let forowin;
    // let forxwin;
    // let forxwincount = 0;
    // let forowincount = 0;
    let namesone;
    let namestwo;
    let xname = "X";
    let oname = "O";
    let boxes;
    function help() {
        boxes = document.querySelectorAll('.boxes')
        boxes.forEach((cell) => {
            cell.addEventListener('click', click
            );
        });
    }
    // let reset = () => {
    //     sum = sum + 1;
    //     boxes = document.querySelectorAll('.boxes')
    //     boxes.forEach((box) => {
    //         let clear = box.textContent
    //         clear.innerText = ""
    //         console.log(clear)
    //     });
    // }
    let restart = () => {
        window.location.reload();
    }
    // let hides = () => {
    //     namesone = document.getElementById('namesone')
    //     namestwo = document.getElementById('namestwo')
    //     namesone.style.display = "none"
    //     namestwo.style.display = "none"
    //     // forxwin = document.getElementById('forxwin')
    //     // forowin = document.getElementById('forowin')
    //     // forxwin.innerHTML = `${xname} wins : ${forxwincount}`
    //     // forowin.innerHTML = `${oname} wins : ${forowincount}`
    // }
    let xadd = () => {
        xname = document.getElementsByTagName('input')[0].value
        let capital = xname.charAt(0);
        capital = capital.toUpperCase();
        xname = capital + xname.slice(1);
        document.getElementsByTagName('input')[1].focus();
        // console.log('xadd is run ', xname)
    }
    let oadd = () => {
        oname = document.getElementsByTagName('input')[1].value
        let capital = oname.charAt(0);
        capital = capital.toUpperCase();
        oname = capital + oname.slice(1);
        // console.log('oadd is run ', oname)

    }
    function click() {

        sum = sum + 1;
        boxes.forEach((box) => {
            if (sum % 2 === 0) {
                box.addEventListener('click', () => {
                    // hides()
                    box.innerText = "X"
                });
            }
            else {
                box.addEventListener('click', () => {
                    // hides()
                    box.innerHTML = "O"
                });
            }
        });

        let interval = setInterval(function see() {
            let z = -1;
            z = z + 1;
            let a = boxes[z].textContent;
            z = z + 1;
            let b = boxes[z].textContent;
            z = z + 1;
            let c = boxes[z].textContent;
            z = z + 1;
            let d = boxes[z].textContent;
            z = z + 1;
            let e = boxes[z].textContent;
            z = z + 1;
            let f = boxes[z].textContent;
            z = z + 1;
            let g = boxes[z].textContent;
            z = z + 1;
            let h = boxes[z].textContent;
            z = z + 1;
            let i = boxes[z].textContent;
            let result = document.getElementById('result')
            namesone = document.getElementById('namesone')
            namestwo = document.getElementById('namestwo')
            if ((a === "X" && b === "X" && c === "X") || (a === "X" && d === "X" && g === "X") || (g === "X" && h === "X" && i === "X") || (i === "X" && f === "X" && c === "X") || (a === "X" && e === "X" && i === "X") || (d === "X" && e === "X" && f === "X") || (b === "X" && e === "X" && h === "X") || (c === "X" && e === "X" && g === "X")) {
                clearInterval(interval);
                namesone.style.display = "none"
                namestwo.style.display = "none"
                // forxwincount = forxwincount + 1;
                // forowin.style.display = "none"
                // forxwin.style.display = "none"
                result.style.display = "block"
                result.innerHTML = `${xname} : is Win`
            }
            else if ((a === "O" && b === "O" && c === "O") || (a === "O" && d === "O" && g === "O") || (g === "O" && h === "O" && i === "O") || (i === "O" && f === "O" && c === "O") || (a === "O" && e === "O" && i === "O") || (d === "O" && e === "O" && f === "O") || (b === "O" && e === "O" && h === "O") || (c === "O" && e === "O" && g === "O")) {
                clearInterval(interval);
                namesone.style.display = "none"
                namestwo.style.display = "none"
                // forowincount = forowincount + 1;
                // forowin.style.display = "none"
                // forxwin.style.display = "none"
                result.style.display = "block"
                result.innerHTML = `${oname} : is Win`
            }

            else if (sum === 9) {
                clearInterval(interval);
                namesone.style.display = "none"
                namestwo.style.display = "none"
                // forowin.style.display = "none"
                // forxwin.style.display = "none"
                result.style.display = "block"
                result.innerHTML = "Draw"
            }
        }, 0)
        setTimeout(function stop() {
            clearInterval(interval)
        }, 30 * 1)
    }

    setTimeout(function tiemout() {
        help()
        click()
        document.getElementsByTagName('input')[0].focus();
        // forxwin = document.getElementById('forxwin')
        // forowin = document.getElementById('forowin')
        abouts = document.getElementById('abouts');
        abouts.style.display = "none"
    }, 0)
    let abouts;

    let about = () => {
        abouts = document.getElementById('abouts');
        abouts.style.display = "block"
    }
    let close = () => {
        abouts = document.getElementById('abouts');
        abouts.style.display = "none"
    }


    return (
        <>
            <div className={style.Heading}>
                <div className={style.data}>
                    <button className={style.btnH}><a href="https://tarunthakur7974.github.io/Resume/#project">Home</a></button>
                    <button onClick={about} className={style.btnH} >About</button>
                </div>
                <div className={style.aboutsdata}>
                    <ul id='abouts'>
                        <button onClick={close} style={{ float: 'right' }}>X</button>
                        <li>"This project was not yet completed many function are remaining."</li>
                        <li>"This game will not reset if you want to paly again restart it "</li>
                        <li>"If you  click again on "x" its convert into "o" and in "x"</li>
                        <li>"But instead of so many problems its good".</li>
                        <li>"Please play a game injoy it."</li>
                    </ul>
                </div>
            </div>

            <div className={style.restart}>
                <h1>Tic Tac Toe</h1>
                <button className={style.add} onClick={restart}>Restart</button>
                {/* <button className={style.add} onClick={reset}>Reset</button> */}
            </div>
            <div className={style.inputs}>
                <div id="namesone" className={style.names} >
                    <p>Name For : X</p>
                    <input type="text" maxLength="10" />
                    <div className={style.addbtn}>
                        <button className={style.add} onClick={xadd} >Add</button></div>
                </div>
                <div id="namestwo" className={style.names}>
                    <p>Name For : O</p>
                    <input type="text" maxLength="10" />
                    <div className={style.addbtn}>
                        <button className={style.add} onClick={oadd} >Add</button></div>
                </div>
                {/* 
                <div id='forxwin' className={style.foro}>

                </div>
                <div id='forowin' className={style.forx}>
                </div>*/}
                <div id="result" className={style.result}></div>

            </div>
            <div className={style.outground}>
                <ul className={style.ground}>
                    <li className="boxes" style={blbt}></li>
                    <li className="boxes" style={bt} ></li>
                    <li className="boxes" style={brbt}></li>
                    <li className="boxes" style={bl}></li>
                    <li className="boxes"></li>
                    <li className="boxes" style={br}></li>
                    <li className="boxes" style={blbb}></li>
                    <li className="boxes" style={bb}></li>
                    <li className="boxes" style={bbbr}></li>
                </ul>
            </div>
        </>
    )
}
