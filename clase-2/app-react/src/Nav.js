import "./Nav.css"

export default function Nav({info,dato}) {

    return(
        <nav>
            <ul>
                <li>{info}</li>
                <li>{dato}..</li>
                <li>Item..</li>
            </ul>
        </nav>
    )
}
//otra forma sin destructing
// export default function Nav(props) {
//     console.log(props)
//     return(
//         <nav>
//             <ul>
//                 <li>{props.info}</li>
//                 <li>{props.dato}..</li>
//                 <li>Item..</li>
//             </ul>
//         </nav>
//     )
// }

//las props son un objeto!!