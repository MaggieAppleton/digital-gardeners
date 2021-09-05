export default function Container({ children }) {
    return (
        <div className="container flex flex-col sm:flex-row max-w-full">
            {children}
        </div>
    );
}
