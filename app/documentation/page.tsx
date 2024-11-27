// Page Component './documentation/page.tsx'


export default function DocumentationPage() {
    return (
        <div>
            <h1>Documenation</h1>
            <h3>App structure and system explanations</h3>

            <div>
                <h3>Core Files</h3>
                <ul>
                    <li>`app/layout.tsx`: __Root Layout__</li>
                    <li>`app/page.tsx`: __Homepage__</li>
                </ul><br />

                <h3>Feature Directories</h3>
                <ul>
                    <li>`app/dashboard`: __Main Directory__</li>
                    <li>`app/scheduling`: __Scheduling__</li>
                    <li>`app/(auth)`</li>: __Authentication__
                </ul><br />

                <h3>Components</h3>
                <ul>
                    <li>`app/layout.tsx`: __Shared Components__</li>
                    <li>`app/components/forms`: __Form Components__</li>
                </ul><br />

                <h3>Information</h3>
                <ul>
                    <li>Forms were created using </li>
                    <li>Authentication was guided by </li>
                </ul><br />
            </div>

            <div>Component usage examples</div>
            <h3>Maybe?</h3>
            <div>
                <ul>
                    <ol>Component</ol>
                </ul>
            </div>
        </div>
    )
}