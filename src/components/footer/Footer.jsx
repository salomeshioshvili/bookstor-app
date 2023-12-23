import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function Footer() {
    return (
        <div className={styles.container}>
          <span>@all rights reserved</span>
          <div className={styles.socialNetworks}>
            <Image src="/1.png" width={20} className={styles.icon} height={20} alt="facebook"/>
            <Image src="/2.png" width={20} className={styles.icon} height={20} alt="instagram"/>
            <Image src="/3.png" width={20} className={styles.icon} height={20} alt="x"/>
            <Image src="/4.png" width={20} className={styles.icon} height={20} alt="youtube"/>
          </div>
        </div>
    )
}

export default Footer