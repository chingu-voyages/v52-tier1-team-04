function MyButton( { title }: { title: String }) {
    return (
        <button>{ title }</button>
    )
}

export default function Page() {
    return (
        <div>
            <h1>Solar</h1>
            <h3>Tier 1: Team 04</h3>
            <MyButton title="Click Me"/>
        </div>
    )
}