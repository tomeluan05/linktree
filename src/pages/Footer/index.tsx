import styles from "../../styles/Footer/styles.module.css";

const Footer = () => {
    return(
        <div className="container bg-dark">
            <div className={`row ${styles.footer}`}>
                <div className="col-md-12">
                    <p>&copy; Copyright 2022 - Tomé Luan Jorge Coelho</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;