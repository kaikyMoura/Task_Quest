import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { AvatarConfig, genConfig } from "react-nice-avatar";

const Avatar = dynamic(() => import('react-nice-avatar'), { ssr: false })

const ChooseAvatar: React.FC = (config: AvatarConfig) => {

    const avatar: AvatarConfig = {
        mouthStyle: config.mouthStyle,
        sex: config.sex
    }

    useEffect(() => {
        config = genConfig()
    }, [])
    return (
        <div>
            Your avatar:
            <Avatar style={{ width: '8rem', height: '8rem' }} {...config} />
        </div>
    );
};

export default ChooseAvatar;