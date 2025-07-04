function Header() {
    return (
        <>
            <div className={'flex flex-nowrap align-center py-5 px-8 bg-amber-300'}>
            <a href="/">
            <img className="h-5 inline" src="/img/logo.png" alt="logo" />
            <h1 className={'bg-amber-300 inline px-8'}>2Lies1Fact</h1>
            </a>
            <p className={'px-8'}>Test</p>
            </div>
        </>
    );
}

export default Header