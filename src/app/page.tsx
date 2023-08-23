import Image from "next/image"; // 로컬, 원격 이미지를 리액트 컴포넌트로 사용
import styles from "./page.module.css";
import MenuIcon from "@mui/icons-material/Menu"; // MUI icon을 리액트 컴포넌트로 사용

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    Get started by editing&nbsp;
                    <code className={styles.code}>src/app/page.tsx</code>
                </p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer">
                        By{" "}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
                <MenuIcon />
            </div>

            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="https://thx.sfo2.cdn.digitaloceanspaces.com/wr/coverimages/i_11/%E3%85%87%E3%84%B9%E3%84%B4_11.jpg"
                    alt="Next.js Logo"
                    width={300}
                    height={200}
                    priority
                />
            </div>
            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/assets/icon-shirt.png"
                    alt="Next.js Logo"
                    width={500}
                    height={400}
                />
            </div>
            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>

            <div className={styles.grid}>
                <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer">
                    <h2>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p>
                        Find in-depth information about Next.js features and
                        API.
                    </p>
                </a>

                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer">
                    <h2>
                        Learn <span>-&gt;</span>
                    </h2>
                    <p>
                        Learn about Next.js in an interactive course
                        with&nbsp;quizzes!
                    </p>
                </a>

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer">
                    <h2>
                        Templates <span>-&gt;</span>
                    </h2>
                    <p>Explore the Next.js 13 playground.</p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer">
                    <h2>
                        Deploy <span>-&gt;</span>
                    </h2>
                    <p>
                        Instantly deploy your Next.js site to a shareable URL
                        with Vercel.
                    </p>
                </a>
            </div>
        </main>
    );
}
