export const Card = ({title, description, image}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg card">
            {image && <img className="w-full" src={image} alt="Sunset in the mountains"/>}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 card-title">{title}</div>
                <p className="text-gray-700 text-base card-body">
                    {description}
                </p>
            </div>
        </div>
    )
}