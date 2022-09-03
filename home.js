function Home() {
    return (
        <Card
            txtcolor="black"
            header="Bad Bank Application"
            title="Welcome to the bank"
            text="Here you can create your account, deposit, and withdraw money."
            body={(<img src="./images/bank.png" className="img-fluid" alt="Responsive image" />)}
        />
    );
}