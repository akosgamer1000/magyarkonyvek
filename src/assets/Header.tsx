interface proops{
    Tagname : string;
    Tartalom:string;

}


export default function TagName(props: proops){
    const Tag = props.Tagname as keyof JSX.IntrinsicElements;
    return <>
        <Tag>{props.Tartalom}</Tag>
    </>
}    
