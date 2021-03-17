import React from 'react'

export default function Nav() {
    const categories = [
        {
            name: "commercial",
            description:
                "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];

    function logCat(cat){
        console.log(cat);
    }
    return (
        <header>
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map(cat => <li className="mx-1" key={cat.name} onClick={()=>logCat(cat.name)}><span>{cat.name}</span></li>)}
                </ul>
            </nav>
        </header>
    )
}
