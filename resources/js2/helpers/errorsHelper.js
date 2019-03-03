hasErrorFor(field) {
    return !!this.state.errors[field]
}

renderErrorFor(field) {
    if (this.hasErrorFor(field)) {
        return ( <
            span className = 'invalid-feedback' >
            <
            strong > {
                this.state.errors[field][0]
            } < /strong> <
            /span>
        )
    }
}