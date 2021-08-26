import styles  from "./Footer.module.scss"

export default function Footer() {
    return (
        <div>
            <div className={`${styles.footer} row py-2 text-center`}>
                <small className="mt-2 text-primary">Created by Mauro Titanio</small>
            </div>
            
        </div>
    )
}
