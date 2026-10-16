function QuickCard({ icon: Icon, title, text, onClick }) {
    return (
        <div className="rounded-xl bg-muted p-4 cursor-pointer" onClick={() => onClick()}>
            <div className="mb-3 inline-flex rounded-lg bg-accent p-2 text-primary">
                <Icon className="h-4 w-4" />
            </div>

            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{text}</p>
        </div>
    );
}

export default QuickCard