
export const Parent = () => {
    
    let childVar = "Hello"

    const callback = (value) => {
        console.log(value)
    }

    return(
        <>
        <Child childvar={childVar} callback={callback} />
        </>
    )
}


const Child = (props) => {

    console.log(props.childvar)

    props.callback("Hello From Child")

    return(
        <>
        
        </>
    )
}