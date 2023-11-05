export default function SwitchHandlerTest({onSelected, children, isSelected}) {
    return (
        <div>
            <button onClick={onSelected} type="button" className={(isSelected ? "btn btn-danger" : "btn btn-primary")}>{children}</button>
        </div>
    )
}
