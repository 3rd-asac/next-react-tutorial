import Image from "next/image";
import StyledComponent from "@/app/StyledComponent";
import AddReactionIcon from "@mui/icons-material/AddReaction";

const Home = () => {
    return (
            <div>
                <StyledComponent />
                <Image
                        src="/twitter.svg"
                        alt="github logo"
                        className={"bg-favorite2"}
                        width={100}
                        height={100}
                />
                <AddReactionIcon className={"bg-favorite"} />
            </div>
    );
};
export default Home;
