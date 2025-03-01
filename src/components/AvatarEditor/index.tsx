import { useLoadingContext } from "@/contexts/LoadingContextProvider";
import { useEffect, useRef, useState } from "react";
import { ChromePicker } from 'react-color';
import { FaShuffle } from "react-icons/fa6";
import { GiPaintBucket } from "react-icons/gi";
import ReactNiceAvatar, { genConfig, NiceAvatarProps } from "react-nice-avatar";
import IconWrapper from "./IconWrapper";
import styles from "./styles.module.scss";


const AvatarEditor = (props: { avatarConfig: NiceAvatarProps, updateConfig: (type: string, value: string | boolean | undefined) => void }) => {
    const { setLoading } = useLoadingContext()

    const [showPicker, setShowPicker] = useState(false);
    const [showPickerBg, setShowPickerBg] = useState(false);
    const [currentHairColor, setCurrentHairColor] = useState("");
    const [currentBgColor, setCurrentBgColor] = useState("");
    const [isMounted, setIsMounted] = useState(false);

    const avatarConfigRef = useRef(props.avatarConfig)

    useEffect(() => {
        setLoading(false)
        setIsMounted(true);
        avatarConfigRef.current = props.avatarConfig
    }, [isMounted, props.avatarConfig, props.updateConfig, setLoading]);

    if (!isMounted) {
        setLoading(true)
        return null;
    }

    function switchConfig(
        type: string,
        currentOpt: string | undefined,
        defaultOptions: Record<string, string[]>,
        updateConfig: (type: string, value: string | boolean | undefined) => void
    ) {
        const opts = defaultOptions[type];
        if (!opts || !Array.isArray(opts) || opts.length === 0) {
            console.error(`Opções inválidas para o tipo: ${type}`);
            return;
        }

        const currentIdx = opts.findIndex((item) => item === currentOpt);
        const newIdx = currentIdx === -1 ? 0 : (currentIdx + 1) % opts.length;

        updateConfig(type, opts[newIdx]);
    }

    const randomizeConfig = () => {
        const newConfig = new ReactNiceAvatar(genConfig()).props

        props.updateConfig('faceColor', newConfig.faceColor);
        props.updateConfig('hairStyle', newConfig.hairStyle);
        props.updateConfig('bgColor', newConfig.bgColor);
        props.updateConfig('glassesStyle', newConfig.glassesStyle);
        props.updateConfig('hatStyle', newConfig.hatStyle);
        props.updateConfig('hatColor', newConfig.hatColor);
        props.updateConfig('hairColorRandom', newConfig.hairColorRandom);
        props.updateConfig('earsize', newConfig.earSize);
        props.updateConfig('noseStyle', newConfig.noseStyle);
        props.updateConfig('hairColor', newConfig.hairColor);
        props.updateConfig('eyeStyle', newConfig.eyeStyle);
        props.updateConfig('shape', newConfig.shape);
        props.updateConfig('shirtColor', newConfig.shirtColor);
        props.updateConfig('mouthStyle', newConfig.mouthStyle);
        props.updateConfig('shirtStyle', newConfig.shirtStyle);
        props.updateConfig('shirtStyle', newConfig.shirtColor);
    }

    return (
        <div className={styles.container} >
            <div className="flex justify-center mb-6 lg:ml-[-20%]">
                <ReactNiceAvatar style={{ height: "12rem", width: "12rem" }} {...props.avatarConfig} />
            </div>
            <div className={`flex items-center p-4 ${styles.selector}`}>

                {/* Seletor da cor da pele */}
                <div className="flex">
                    <IconWrapper className={"w-10 h-10 p-2"} switchConfig={() => switchConfig('faceColor', props.avatarConfig.faceColor, {
                        faceColor: ['#F9C9B6', '#FFD700', '#A8DADC', 'brown',],
                    }, props.updateConfig)}>
                        <svg values={props.avatarConfig.faceColor || "#F9C9B6"} width="34" height="36" viewBox="0 0 200 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path d="M154 319.5C139.6 299.5 128.333 260.834 127 241.5L58.5 212L30 319.5H154Z" fill="#F9C9B6" stroke="black" stroke-width="4"></path>
                                <mask id="mask-id" maskUnits="userSpaceOnUse" x="30" y="212" width="124" height="118"><path d="M154 329.5C139.6 309.5 128.333 260.834 127 241.5L58.5 212L30 329.5H154Z" fill="#F9C9B6"></path></mask>
                                <g mask="url(#mask-id)"><ellipse cx="124" cy="210" rx="59" ry="54" fill="black"></ellipse></g><mask id="path-id" fill="white">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M183.886 150.917C183.859 150.801 183.831 150.685 183.803 150.569C183.776 150.454 183.748 150.338 183.719 150.222L167.323 81.7855C167.306 81.7177 167.29 81.6499 167.274 81.5821C167.258 81.5142 167.242 81.4465 167.225 81.3787L167.152 81.0752L167.151 81.0755C156.933 39.6308 115.156 14.1472 73.5821 24.1081C32.0078 34.0689 6.31547 75.7174 15.9883 117.293L15.9863 117.293L32.9776 188.211L32.9916 188.208C43.5944 229.112 85.0616 254.149 126.329 244.261C167.597 234.374 193.216 193.264 184.131 151.996L184.144 151.993L183.886 150.917Z">
                                    </path>
                                </mask>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M183.886 150.917C183.859 150.801 183.831 150.685 183.803 150.569C183.776 150.454 183.748 150.338 183.719 150.222L167.323 81.7855C167.306 81.7177 167.29 81.6499 167.274 81.5821C167.258 81.5142 167.242 81.4465 167.225 81.3787L167.152 81.0752L167.151 81.0755C156.933 39.6308 115.156 14.1472 73.5821 24.1081C32.0078 34.0689 6.31547 75.7174 15.9883 117.293L15.9863 117.293L32.9776 188.211L32.9916 188.208C43.5944 229.112 85.0616 254.149 126.329 244.261C167.597 234.374 193.216 193.264 184.131 151.996L184.144 151.993L183.886 150.917Z" fill="#F9C9B6"></path><path d="M183.886 150.917L179.992 151.831L179.994 151.84L179.996 151.849L183.886 150.917ZM183.719 150.222L179.83 151.154L179.832 151.163L179.834 151.172L183.719 150.222ZM167.323 81.7855L163.43 82.7076L163.433 82.7175L167.323 81.7855ZM167.274 81.5821L163.384 82.5141L163.384 82.5142L167.274 81.5821ZM167.225 81.3787L163.335 82.3108L163.338 82.321L167.225 81.3787ZM167.152 81.0752L171.042 80.1432L170.111 76.255L166.222 77.1849L167.152 81.0752ZM167.151 81.0755L163.267 82.0331L164.218 85.8897L168.081 84.9659L167.151 81.0755ZM73.5821 24.1081L72.6501 20.2182L73.5821 24.1081ZM15.9883 117.293L16.9223 121.182L20.7842 120.255L19.8842 116.386L15.9883 117.293ZM15.9863 117.293L15.0523 113.404L11.1649 114.337L12.0964 118.225L15.9863 117.293ZM32.9776 188.211L29.0877 189.143L30.0201 193.035L33.9113 192.101L32.9776 188.211ZM32.9916 188.208L36.8636 187.204L35.8779 183.401L32.058 184.318L32.9916 188.208ZM126.329 244.261L125.397 240.371H125.397L126.329 244.261ZM184.131 151.996L183.2 148.106L179.381 149.021L180.225 152.856L184.131 151.996ZM184.144 151.993L185.075 155.883L188.966 154.951L188.034 151.061L184.144 151.993ZM187.78 150.002C187.751 149.881 187.722 149.759 187.693 149.637L179.914 151.502C179.94 151.611 179.966 151.721 179.992 151.831L187.78 150.002ZM187.693 149.637C187.664 149.516 187.635 149.395 187.605 149.273L179.834 151.172C179.861 151.281 179.887 151.391 179.914 151.502L187.693 149.637ZM163.433 82.7175L179.83 151.154L187.609 149.29L171.212 80.8535L163.433 82.7175ZM171.215 80.8634C171.198 80.7928 171.181 80.7216 171.164 80.65L163.384 82.5142C163.4 82.5781 163.415 82.6425 163.43 82.7076L171.215 80.8634ZM171.164 80.65C171.147 80.579 171.13 80.5078 171.113 80.4364L163.338 82.321C163.353 82.3851 163.369 82.4494 163.384 82.5141L171.164 80.65ZM163.262 82.0072L163.335 82.3108L171.115 80.4467L171.042 80.1432L163.262 82.0072ZM168.081 84.9659L168.083 84.9655L166.222 77.1849L166.221 77.1852L168.081 84.9659ZM171.035 80.118C160.291 36.5398 116.364 9.74466 72.6501 20.2182L74.514 27.998C113.949 18.5498 153.575 42.7219 163.267 82.0331L171.035 80.118ZM72.6501 20.2182C28.936 30.6917 1.92157 74.4836 12.0923 118.199L19.8842 116.386C10.7094 76.9513 35.0796 37.4461 74.514 27.998L72.6501 20.2182ZM16.9204 121.183L16.9223 121.182L15.0542 113.403L15.0523 113.404L16.9204 121.183ZM36.8676 187.279L19.8763 116.361L12.0964 118.225L29.0877 189.143L36.8676 187.279ZM32.058 184.318L32.044 184.322L33.9113 192.101L33.9252 192.097L32.058 184.318ZM29.1195 189.211C40.2685 232.223 83.8693 258.548 127.261 248.151L125.397 240.371C86.2539 249.75 46.9204 226.002 36.8636 187.204L29.1195 189.211ZM127.261 248.151C170.653 237.755 197.591 194.53 188.038 151.136L180.225 152.856C188.842 191.999 164.541 230.993 125.397 240.371L127.261 248.151ZM183.212 148.103L183.2 148.106L185.063 155.886L185.075 155.883L183.212 148.103ZM179.996 151.849L180.254 152.925L188.034 151.061L187.776 149.985L179.996 151.849Z" fill="black" mask="url(#path-id)"></path></g><defs><clipPath id="clip0"><rect width="200" height="320" fill="white"></rect></clipPath></defs></svg>
                    </IconWrapper>
                </div>

                {/* Seletor de estilo do cabelo */}
                <div className="flex">
                    <IconWrapper className={"w-10 h-10 p-2"} switchConfig={() => switchConfig('hairStyle', props.avatarConfig.hairStyle, {
                        hairStyle: ['thick', 'mohawk', 'womanLong', 'womanShort', 'normal'],
                    }, props.updateConfig)}>
                        <a
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Hair style">
                            <svg width="34" height="36" viewBox="0 0 240 270" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M123.788 17.4887L123.864 17.4969L123.941 17.4991C150.61 18.2835 171.342 28.8969 186.013 41.8493C200.069 54.2583 208.463 68.7231 211.2 78.5817C207.14 80.8991 200.185 82.8931 191.315 84.5285C181.639 86.3123 170.022 87.615 158.168 88.5436C134.462 90.4007 109.978 90.7491 98.5428 90.5005L92.4699 90.3685L97.2764 94.0826C99.774 96.0125 103.099 97.3557 106.615 98.3003C110.156 99.2517 114.034 99.8354 117.746 100.167C121.57 100.509 125.299 100.589 128.387 100.51C117.8 108.672 104.325 114.948 91.0384 119.6C75.6922 124.973 60.7685 128.12 51.2093 129.521L49.0601 129.836L49.551 131.952C52.8984 146.381 59.0518 171.603 63.179 188.519C65.01 196.025 66.4422 201.895 67.0537 204.463C68.1379 209.017 71.5518 215.508 75.4484 221.491C79.0412 227.008 83.2329 232.38 86.7703 235.687L78.9322 267.5H49.3714C57.7091 254.787 59.469 240.097 57.7689 224.517C55.9286 207.653 50.0074 189.513 43.7659 171.35C43.1514 169.562 42.5339 167.774 41.9165 165.986C36.2326 149.527 30.5644 133.113 27.4936 117.382C24.0922 99.9582 23.9407 83.6514 30.3264 69.3137C40.6653 46.0999 58.9929 32.6198 77.3255 25.1911C95.701 17.745 113.945 16.4399 123.788 17.4887Z" fill="#fff" stroke="#171921" stroke-width="4"></path></svg>
                        </a>
                    </IconWrapper>
                </div>

                {/* Seletor da cor do cabelo */}
                <div className="flex">
                    <IconWrapper className={"w-10 h-10 p-2"} switchConfig={() => switchConfig('hairColor', props.avatarConfig.hairColor, {
                        hairColor: [],
                    }, props.updateConfig)}
                    >
                        <a
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Hair color">
                            <svg
                                onClick={() => setShowPicker(!showPicker)}
                                width="34"
                                height="36"
                                viewBox="0 0 240 270"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M123.788 17.4887L123.864 17.4969L123.941 17.4991C150.61 18.2835 171.342 28.8969 186.013 41.8493C200.069 54.2583 208.463 68.7231 211.2 78.5817C207.14 80.8991 200.185 82.8931 191.315 84.5285C181.639 86.3123 170.022 87.615 158.168 88.5436C134.462 90.4007 109.978 90.7491 98.5428 90.5005L92.4699 90.3685L97.2764 94.0826C99.774 96.0125 103.099 97.3557 106.615 98.3003C110.156 99.2517 114.034 99.8354 117.746 100.167C121.57 100.509 125.299 100.589 128.387 100.51C117.8 108.672 104.325 114.948 91.0384 119.6C75.6922 124.973 60.7685 128.12 51.2093 129.521L49.0601 129.836L49.551 131.952C52.8984 146.381 59.0518 171.603 63.179 188.519C65.01 196.025 66.4422 201.895 67.0537 204.463C68.1379 209.017 71.5518 215.508 75.4484 221.491C79.0412 227.008 83.2329 232.38 86.7703 235.687L78.9322 267.5H49.3714C57.7091 254.787 59.469 240.097 57.7689 224.517C55.9286 207.653 50.0074 189.513 43.7659 171.35C43.1514 169.562 42.5339 167.774 41.9165 165.986C36.2326 149.527 30.5644 133.113 27.4936 117.382C24.0922 99.9582 23.9407 83.6514 30.3264 69.3137C40.6653 46.0999 58.9929 32.6198 77.3255 25.1911C95.701 17.745 113.945 16.4399 123.788 17.4887Z"
                                    fill={currentHairColor}
                                    stroke="black"
                                    strokeWidth="4"
                                ></path>
                            </svg>
                        </a>
                    </IconWrapper>

                    {showPicker && (
                        <div id="hairColor" style={{ position: 'absolute', top: '40px', left: '20px', zIndex: 100 }} onMouseLeave={() => setShowPicker(!showPicker)} onClick={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>
                            <ChromePicker color={currentHairColor} onChange={(e) => { props.updateConfig("hairColor", e.hex); setCurrentHairColor(e.hex); }} />
                        </div>
                    )}
                </div>

                {/* Seletor de chapéu */}
                <div className="flex">
                    <IconWrapper className={"w-10 h-10 p-2"} switchConfig={() => switchConfig('hatStyle', props.avatarConfig.hatStyle, {
                        hatStyle: ['beanie', 'turban', 'none'],
                    }, props.updateConfig)}>
                        <svg width="32" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 508" preserveAspectRatio="xMidYMid meet" ><defs></defs><path fill="#000000" d="M71.5 502.6c-3.8-1.6-14.6-15.8-20.3-26.5C46 466.3 28 426.5 23.1 414c-6.4-16.4-13.6-42.5-14.7-53.3-.7-7.4-.6-7.8 7.4-17.6l4.5-5.6-.6-34c-.6-35-.1-45 3.3-68.5 3.3-22.8 4.9-36 6-48.5.6-6.6 2-17.8 3.1-25 3.6-24.8 7.3-35.2 16.9-47.5 2.8-3.6 9.9-13.2 15.8-21.4C84.3 65.5 92.4 58.7 110 54.5c5.2-1.2 13.8-2.7 19-3.3 15.7-1.9 20.1-4.1 40-20.1 13.3-10.7 21.5-15 30.8-16.1 6.7-.9 21.1.2 26.7 2 3.3 1 19.4 3.9 26.5 4.7 5.4.6 18.5-2.4 32-7.1 17.9-6.4 20.2-7 31.5-7.4 16.4-.6 24.4 1.4 50 12.3 24.1 10.3 27.7 11.1 43 9.5 26.1-2.7 42.9 2.8 71 23.1 19.5 14 24.1 16.2 40 18.4 2.8.4 6.4 1.5 8.1 2.6 5.5 3.4 13.2 12.5 22.8 27.1 14.3 21.9 24.6 40.4 30 54 .9 2.4 3.2 5 6 7 5.1 3.5 7.8 8.4 18.6 33.8 7.9 18.5 11.4 31.3 19.6 72.8l6.8 33.7v20.1c.1 21.9-.2 23.4-5.4 23.4-1.5 0-4.1-.7-5.6-1.5-1.6-.8-3.7-1.5-4.6-1.5-1 0-4.1-.9-7-2-10.8-4-49.4-12.7-59.8-13.4-2-.2-4.5-.8-5.5-1.3-2.3-1.2-13.7-3.5-30-6-14-2.2-60.2-2.4-81.5-.5l-29 2.8c-45 4.2-84.8 13-119.3 26.6-27 10.6-76.5 37.3-98.3 53.1-39.8 28.8-71.9 57.9-93.6 85.2-6.6 8.3-12.7 15.6-13.6 16.3-2 1.5-3.9 1.5-7.7-.2zm11.1-29.3c12.5-15.7 36.4-39.4 58.2-57.5l3.2-2.6-3.7-7.9c-2-4.3-5.1-10.3-6.9-13.3-1.7-3-6.2-11.3-9.9-18.5-9.7-18.5-15-27.8-21.5-37.5-6.8-10.1-16.9-23-18.1-23-1.8 0-28.8 17.9-42.4 28.1-5 3.7-11.2 9.4-13.8 12.7l-4.7 6 2.1 8.4c5.3 21.5 11.6 39.7 19.1 55.1 2.6 5.4 4.8 10 4.8 10.4 0 1.1 9.4 21.8 13.8 30.2 3.9 7.6 10.9 19.1 11.7 19.1.1 0 3.8-4.4 8.1-9.7zm89.5-81.5c12.6-9 18.5-12.8 35.1-22.8 7.4-4.5 12.4-8.1 11.9-8.6s-4.6-8.3-9.3-17.4c-4.6-9.1-10.6-20-13.3-24.3-14.2-22.2-19.7-30.2-27-39.5l-7.9-10.1-17.6 9.1c-9.6 5-20.6 11-24.5 13.3-3.8 2.3-9.4 5.5-12.2 7.1-2.9 1.6-5.3 3.1-5.3 3.4s3.3 5 7.4 10.5c8.8 11.8 19.6 29.6 29.7 49l11.3 21.6 6.6 12.2c1.4 2.6 3 4.5 3.6 4.3s5.7-3.7 11.5-7.8zm88.4-50.4c9.6-4.5 22.1-9.6 31.3-12.6 6.8-2.3 9.2-3.5 9.2-4.8 0-9.8-10.5-41.9-19.5-59.5-10.1-19.9-21.8-37.5-24.9-37.5-1 0-11.9 4.2-18.1 7-1.1.5-4.9 2.1-8.5 3.6-3.6 1.4-8.1 3.3-10 4.1l-5.5 2.4c-7.1 3-24.9 11.1-29.6 13.4l-5.6 2.8 9.6 12.7c5.3 7 11.3 15.6 13.4 19.1l8.9 14.4c2.9 4.4 8.3 14.1 12.1 21.5l10 19.1 3 5.7 9.6-4.5 14.6-6.9zm357.2-26.1C617 300.9 606.4 246 600 224c-2.3-8.1-11-29.6-17.6-43.5-2.3-4.7-4.5-5.4-19.6-5.4-7.7-.1-9.8.2-9.8 1.3 0 .7 1.1 4.7 2.4 8.7 4.8 14.8 6.3 20.7 11.7 45.9 1.9 8.8 2.3 13.7 2.3 30 .1 19.6-.5 25-5 43.6-.7 3.3-1.4 6.5-1.4 7.1 0 1 3.6 1.9 18 4.8 8.5 1.7 34.2 8.3 34.9 9 1.9 1.9 2.3-.6 1.8-10.2zm-569.7-3c13.2-8.9 26.6-17 65-39.2 19.1-11.1 58.8-30.9 83.5-41.6l15-6.6c26.5-11.8 61.3-24.6 86-31.7l24.5-6.8c5.4-1.3 10.9-2.7 24.5-6.6 23.5-6.6 35.4-9.1 57.5-12.3 5.8-.8 13.1-1.9 16.2-2.5s12.3-1.7 20.5-2.6l23.8-2.5c5-.5 30-1.2 55.6-1.5l46.7-.7-5.2-10.1c-5.1-9.8-11.2-20.2-18.5-31.6-2-3-4-6.3-4.6-7.2-3.8-6.5-11.4-16.4-15.4-20.1-4.3-4.1-5.3-4.5-11.6-5.2-14.4-1.5-20.2-4.4-44.9-22.2-9.9-7.2-21.5-13.4-30.7-16.4-5.9-1.9-7.8-2-24.4-1.4-12.2.5-20.1.3-24.4-.5-6.3-1.1-19.4-6-33.6-12.5-14.7-6.7-29.9-10.2-38.8-9.1-2.9.4-13.2 3.4-23 6.7-26.9 9.1-38.5 9.7-69.2 3.4-22.5-4.6-25.3-3.7-48 15.1-16.3 13.5-24.5 16.8-48.3 19.9-18 2.3-23.6 4.9-33.7 15.7-3.3 3.5-7.8 9-10 12.3-2.2 3.2-6.7 9.4-10 13.8l-7 9.6c-.5.8-2.9 4-5.3 7-10.6 13.4-12.8 23.3-19.3 86.6-.5 5-1.3 11.3-1.9 14-.5 2.8-2.1 14.7-3.6 26.5-2.5 20.7-2.6 22.2-1.5 42l1.1 23.9c0 3.3 0 3.3 2.3 1.7l10.7-7.3zm290.5 3.9c15.8-3.3 35.1-6.6 44.8-7.7l5.9-.7-.6-3.1c-.3-1.8-.8-8.1-1.1-14.2-1.3-23.5-4.4-38-14.8-69.5-6.1-18.3-9.3-26-11.1-26-.6 0-4.3.9-8.1 2-3.9 1.2-13.5 3.8-21.5 6-23.2 6.1-25.7 6.9-40.7 11.6-9.8 3.2-14.1 5-13.5 5.8l5.3 8.1c15.9 24.5 27.6 52.2 32.9 78 2.9 13.9 2.8 13.8 5.3 13.2 1.2-.2 9-1.8 17.2-3.5zm207.2-12.7c2.2-8.6 5-23.6 6.3-32.9 1.6-11.5.5-20.2-6-49.6-1.8-8.4-2.7-11.6-8.9-31.9-5-16.1-1.7-14.5-27.5-13.7l-28.9 1.3-6.7.6.6 3.6c.4 2 2.9 10.6 5.6 19.1 7.5 23.3 11.6 39.1 15.6 60.6 1.4 7.3 1.6 33.6.3 38.2-1.2 4-2.1 3.7 13.6 5.1 12 1.1 30.4 3.9 31.3 4.7 1.5 1.6 3.6-.7 4.7-5.1zm-106.2 0l30.5-1.8 6.5-.2 1.3-5c1.7-6.6 1-31.7-1.1-40-.9-3.3-2.6-10-3.8-15-2.1-8.9-5.4-19.9-10.9-36.5-1.6-4.7-3.6-12.3-4.6-16.9-1.1-5-2.4-8.5-3.2-8.9-1.5-.5-23.1 1.9-34.2 3.9l-20.9 3.4c-8.5 1.4-15.9 2.9-16.3 3.3-.5.5.2 3.7 1.6 7.3 4.3 11.5 8.4 24.2 11.6 35.9l4 14c1.8 5 5 31.3 5 41.3 0 5.6.3 11.9.6 14l.7 3.7 4.6-.5c2.5-.3 15.4-1.2 28.6-2z"></path><path fill="#fff" d="M70.4 484.7c-4.3-5.9-9.8-15.6-14-24.5C51.6 450 46 437.3 46 436.6c0-.3-2.2-4.9-4.8-10.3-7.5-15.4-13.8-33.6-19.1-55.2-3-12.1-2.8-13.3 2.6-20.3 5-6.3 15.4-14.5 34.8-27.5 17.9-11.9 24.3-15.6 25.8-15 1.9.7 12.6 14.2 19.6 24.6 6.6 9.8 11.9 19 21.6 37.6 3.7 7.2 8.2 15.5 9.9 18.5s5.3 9.9 8 15.3c4.1 8.3 4.7 10 3.5 11.1-.8.7-6.1 5.2-11.9 10.1-16.9 14.4-38.4 36-49.7 50-5.8 7.2-11 13.1-11.7 13.2-.6.2-2.5-1.6-4.2-4zm84.1-85c-1.6-3.4-4.8-9.6-7.1-13.7l-11.9-22.5c-13.1-25.1-24.8-43.6-36.2-57.2l-4.4-5.2 7.3-4.2 14.3-8.5c3.9-2.3 15.9-8.7 26.7-14.3l19.6-10.2 9.2 11.7c8.4 10.6 12.3 16.4 27.5 40.1 2.7 4.3 7.8 13.4 11.3 20.3l10.3 19.7c2.9 5.3 3.5 7.3 2.6 8-.7.6-6.4 4-12.7 7.8-13.9 8.2-32.7 20.6-43.3 28.6-4.3 3.3-8.4 5.9-9 5.8-.7 0-2.5-2.8-4.2-6.2zm78-45.7c-1.4-2.2-5.3-9.5-8.6-16.2-12-23.8-26.9-47.7-41.8-66.8-4.4-5.7-8.1-10.9-8.1-11.5 0-1 19.5-10.9 29.9-15.2 2-.8 5.1-2.1 6.9-2.9 1.7-.8 4.7-2 6.5-2.8 1.7-.8 6.1-2.6 9.7-4l8.5-3.6c1.1-.5 6.7-2.8 12.4-5.1l10.4-4.3 4 4.5c11.2 12.5 27 42.1 34.1 63.9 5.6 17.4 9.7 36.7 8.1 38-.5.5-5.1 2.2-10 3.8-9 3-21.6 8.1-31 12.6l-16.8 8-11.7 5.5-2.5-3.9zm382.7-24.6c-4.1-1.8-26.8-7.8-37.2-9.9-19-3.8-19-3.8-19-5.8 0-1 .9-5.5 1.9-10 4.8-20.1 5.6-25.9 5.5-42.7-.1-17.1-.5-20.1-6.8-47-2.3-10.1-3.8-15.1-8.6-30.5-1.2-3.8-2.4-8.1-2.7-9.3l-.6-2.4 16.9.3c9.3.1 17.5.7 18.2 1.2 1.3 1 2 2.5 11.4 24.2 8.9 20.6 11.1 28.7 20.4 75.5 4.9 24.5 5.7 30.6 6.2 43.3.5 16.2.6 15.8-5.6 13.1zM31.9 319.3l-.4-9.5c-.2-.9-.6-10.4-1-21-.6-18-.5-20.9 2.4-43.5l3.6-25.5c.2-.7.9-5.8 1.4-11.3 4.3-43 6.7-59.2 10.3-70 2.7-8 3.9-10.2 9-16.6 2.4-3 4.8-6.2 5.3-7 .6-.9 3.7-5.2 7-9.6s7.8-10.6 10-13.8c2.2-3.3 6.7-8.8 10-12.3 10.1-10.8 15.7-13.4 33.7-15.7 23.8-3.1 32-6.4 48.3-19.9 6.1-5.1 12.8-10.4 15-11.8 9.8-6.6 19-7.4 38.6-3.4 29.5 6 37.4 5.6 64.1-3.5 13.7-4.6 20-6.2 25.8-6.6 12.2-.9 26.1 2.2 41.5 9.2 13.7 6.3 27.2 11.3 32.9 12.4 3.6.7 12.5.8 24 .4 15.9-.5 19-.4 24.2 1.2 8.9 2.7 22.3 9.7 32 16.7 24.7 17.9 30.5 20.8 44.9 22.3 6.3.7 7.3 1.1 11.6 5.2 4 3.7 11.6 13.6 15.4 20.1.6.9 2.6 4.2 4.6 7.2 12 18.5 23.6 40.2 24.1 45l.3 2.5-46.5.7-56 1.7-24.3 2.5c-8.2.9-17.4 2-20.5 2.6s-10.4 1.7-16.2 2.5c-22.1 3.2-34 5.7-57.5 12.3-13.6 3.9-19.1 5.3-24.5 6.6-5.3 1.3-9.1 2.3-24.5 6.8-24.7 7.1-59.5 19.9-86 31.7l-15 6.6c-21.4 9.3-49.2 22.9-74 36.3-8.5 4.6-42 24-50 28.9-12 7.5-28.8 18.4-34.6 22.6-3.7 2.6-7.2 4.7-7.8 4.7-.7 0-1.1-2.7-1.2-7.7zm284.6 4.6c-.3-.4-1.7-6.1-3-12.6-5.3-25.2-15.7-51.1-29.9-74.3-3.2-5.2-7.3-11.4-9.2-13.7s-3.4-4.6-3.4-5.1c0-.6 7.1-3.3 15.8-6.1 16.4-5.2 18.6-5.9 42.2-12.2l23.5-6.4c4.9-1.4 9.9-2.5 11-2.5 2.6 0 5 5.4 12.2 27 10.8 32.6 12.9 42.8 15.3 75 1.5 19.6 1.9 17.7-4.7 18.5-14.5 1.7-48.5 7.9-62.1 11.4-3.9 1.1-7.4 1.5-7.7 1zM541 312c-13.2-2.8-36.4-6-43.5-6-6.2 0-6.6-.6-5-7.5s2-27.1.5-34.2c-3.1-15.6-7.4-34.4-8.7-38.3-.8-2.5-1.6-5.2-1.8-6s-2.6-8.5-5.3-17c-5-15.7-7.9-27.6-7-28.5.7-.7 38.4-2.5 53-2.5 13.7 0 12.2-1.3 16.9 14.1 6.2 20.3 7.1 23.5 8.9 31.9 6.9 31.2 8.1 42.1 6 55.9-2.4 15.7-6 33.3-7.7 37.6-.6 1.6-1 1.7-6.3.5zm-137-3c-1-.6-1.5-5.2-2.1-18.2-.7-16.6-3-35.6-4.9-40.8l-4-14c-3.5-12.7-8.7-28.6-13.1-39.8-1.6-4-2.9-7.7-2.9-8.1 0-.5 3-1.6 6.8-2.5 10.4-2.3 54.8-8.8 67.9-9.9l6.3-.5.9 3.6 2.1 9.2c.7 3 2.5 9.3 4 14 5.8 17.6 8.8 27.8 10.9 36.5l3.8 15c2.1 8.2 2.9 39.1 1.1 46l-1.3 5-7.5.3c-12 .4-65.1 4.1-65.9 4.6-.4.3-1.3.1-2.1-.4z"></path></svg>
                    </IconWrapper>
                </div>


                {/* Seletor de tamanho da orelha */}
                <div className="flex">
                    <IconWrapper className={"w-10 h-10 p-2"} switchConfig={() => switchConfig('earSize', props.avatarConfig.earSize, {
                        earSize: ['small', 'big'],
                    }, props.updateConfig)}>
                        <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M30.5 6.17556C28.17 5.40834 25.6547 5 23.08 5C12.5866 5 4.08007 11.5 5.08001 23.5C6.12162 36 13.5866 40.5 24.08 40.5C25.2476 40.5 26.3906 40.3975 27.5 40.2011C28.7105 39.9869 29.8811 39.6609 31 39.2347" stroke="#171921" stroke-width="9"></path><path d="M31.5 39.0361C29.2204 39.9786 26.7127 40.5 24.08 40.5C13.5866 40.5 6.12162 36 5.08001 23.5C4.08007 11.5 12.5866 5 23.08 5C26.2175 5 29.2667 5.60635 32 6.72957L31.5 39.0361Z" fill="#fff"></path><path d="M27.5 13.5004C23.5 11.6671 14.7 10.7004 11.5 21.5004" stroke="#171921" stroke-width="4"></path><path d="M17 14C19.1667 15.8333 23.3 21.5 22.5 29.5" stroke="#171921" stroke-width="4"></path></svg>
                    </IconWrapper>
                </div>

                {/* Seletor de estilo de óculos */}
                <div className="flex">
                    <IconWrapper className={"w-10 h-10 p-2"} switchConfig={() => switchConfig('glassesStyle', props.avatarConfig.glassesStyle, {
                        glassesStyle: ['round', 'square', "none"],
                    }, props.updateConfig)}>
                        <svg width="34" height="36" viewBox="0 0 160 74" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M36.5 42.5L2 49.125" stroke="black" stroke-width="4" stroke-linecap="round"></path><path d="M32.4878 25.9393C31.618 22.4804 33.9396 19.0308 37.4716 18.5345L76.1882 13.0932C79.4696 12.632 82.5036 14.9183 82.9648 18.1998L88.5317 57.8105C88.9929 61.0919 86.7066 64.126 83.4252 64.5871L48.9526 69.4319C45.9161 69.8587 43.0465 67.9273 42.2987 64.9536L32.4878 25.9393Z" stroke="black" stroke-width="4"></path><path d="M154.751 8.96388C154.634 5.39915 151.451 2.7232 147.919 3.21958L109.203 8.66085C105.921 9.12202 103.635 12.156 104.096 15.4375L109.663 55.0482C110.124 58.3297 113.158 60.616 116.44 60.1548L150.912 55.31C153.949 54.8832 156.175 52.2357 156.074 49.1711L154.751 8.96388Z" stroke="black" stroke-width="4"></path><path d="M85.5 37.125L107.5 33.625" stroke="black" stroke-width="4"></path></svg>
                    </IconWrapper>
                </div>

                <div>
                    <IconWrapper className={"w-10 h-10 p-2"} switchConfig={() => switchConfig('noseStyle', props.avatarConfig.noseStyle, {
                        noseStyle: ['long', 'short', 'round'],
                    }, props.updateConfig)}>
                        <a
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Nose style"
                        >
                            <svg width="34" height="36" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M12.307 12.3397C17.753 11.0993 26.6843 12.9603 24.7238 22.8833C22.9813 31.7023 13.6141 32.1857 11 29.7048" stroke="black" stroke-width="4"></path></svg>
                        </a>
                    </IconWrapper>
                </div>

                {/* Estilo dos olhos */}
                <div>
                    <IconWrapper className={"w-10 h-10 p-2"} switchConfig={() => switchConfig('eyeStyle', props.avatarConfig.eyeStyle, {
                        eyeStyle: ['circle', 'smile', 'oval'],
                    }, props.updateConfig)}>
                        <a
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Eye style"
                        >
                            <svg width="32" height="34" viewBox="0 0 96 48" fill="black" xmlns="http://www.w3.org/2000/svg"><ellipse cx="16.1171" cy="28.9268" rx="9" ry="10" transform="rotate(-6.77646 16.1171 28.9268)" fill="black"></ellipse><ellipse cx="80.1486" cy="18.9231" rx="9" ry="10" transform="rotate(-6.27568 80.1486 18.9231)" fill="black"></ellipse></svg>
                        </a>
                    </IconWrapper>
                </div>

                {/* Mouth Style */}
                <div>
                    <IconWrapper className={"w-10 h-10 p-2"} switchConfig={() => switchConfig('mouthStyle', props.avatarConfig.mouthStyle, {
                        mouthStyle: ['laugh', 'smile', 'peace'],
                    }, props.updateConfig)}>
                        <a
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Mouth style"
                        >
                            <svg viewBox="0 0 73 64" width="28" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M69.9204 13.3305C69.7501 11.263 67.6363 10.1117 65.8448 10.8176C61.6161 12.4839 47.6267 17.7834 37.7627 19.1403C26.9401 20.6291 10.5503 18.821 5.80622 18.2319C3.87694 17.9923 2.15721 19.6504 2.49021 21.6654C3.14178 25.6081 4.48399 29.4088 6.45857 32.8914C8.6608 36.7754 11.6065 40.1877 15.1274 42.9333C18.6484 45.679 22.6757 47.7042 26.9793 48.8935C31.283 50.0827 35.7787 50.4126 40.2099 49.8644C44.6411 49.3162 48.9208 47.9005 52.8049 45.6983C56.689 43.4961 60.1012 40.5504 62.8469 37.0294C65.5925 33.5085 67.6178 29.4812 68.807 25.1775C69.8726 21.3212 70.2483 17.3106 69.9204 13.3305Z" fill="#171921" stroke="black" stroke-width="4"></path><mask id="mouth-laugh-id" maskUnits="userSpaceOnUse" x="4" y="12" width="65" height="37"><path d="M67.7931 12.1925C68.3091 16.363 67.9985 20.5943 66.8793 24.6448C65.76 28.6953 63.8539 32.4857 61.2697 35.7996C58.6856 39.1134 55.474 41.8858 51.8185 43.9585C48.1629 46.0312 44.1348 47.3636 39.9643 47.8795C35.7938 48.3955 31.5625 48.085 27.512 46.9657C23.4615 45.8464 19.6712 43.9403 16.3573 41.3562C13.0435 38.772 10.2711 35.5605 8.19838 31.9049C6.12569 28.2493 4.79332 24.2213 4.27734 20.0508L67.7931 12.1925Z" fill="pink"></path></mask><g mask="url(#mouth-laugh-id)"><circle cx="40.5221" cy="52.3146" r="21.5" transform="rotate(-7.05286 40.5221 52.3146)" fill="pink" stroke="black"></circle></g></svg>
                        </a>
                    </IconWrapper>
                </div>

                {/* Controle para cor do fundo */}
                <div className="flex" >
                    <IconWrapper className={"w-10 h-10 p-2"} switchConfig={() => switchConfig('bgColor', props.avatarConfig.bgColor, {
                        bgColor: [],
                    }, props.updateConfig)}
                    >
                        <a
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Background color">
                            <GiPaintBucket style={{ background: "none" }} className="w-7 h-7" onClick={() => setShowPickerBg(!showPickerBg)} />
                        </a>
                    </IconWrapper>

                    {showPickerBg && (
                        <div id="bgColor" style={{ position: 'absolute', top: '40px', left: '20px', zIndex: 100 }} onMouseLeave={() => setShowPickerBg(!showPickerBg)}>
                            <ChromePicker color={currentBgColor} onChange={(e) => { props.updateConfig("bgColor", e.hex); setCurrentBgColor(e.hex); }} />
                        </div>
                    )}
                </div>

                {/* Controle do estilo da moldura */}
                <div>
                    <IconWrapper className={"w-10 h-10 p-2"} switchConfig={() => switchConfig('shirtStyle', props.avatarConfig.shirtStyle, {
                        shirtStyle: ["polo", "hoody", "short"],
                    }, props.updateConfig)}>
                        <a
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Shirt style"
                        >
                            <svg width="32" height="80" viewBox="0 0 281 93" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M182.552 38.4488L182.692 38.4809L182.836 38.4927C228.961 42.2969 256.62 62.7848 276.694 90.9997H3.37453C19.6742 61.6579 42.8579 42.9816 80.4446 34.4117C96.4579 30.7606 115.113 28.9394 137 28.9395C146.456 28.9395 153.814 30.3819 160.796 32.2853C163.383 32.9904 165.983 33.7805 168.643 34.5887C173.045 35.9265 177.611 37.3141 182.552 38.4488Z" fill="#fff" stroke="black" stroke-width="4"></path><path d="M68.9305 36.5805L78.0837 16.9838C78.3023 16.5157 78.8456 16.293 79.3326 16.4654C117.259 29.8904 151.762 28.945 183.736 20.0444C184.139 19.9324 184.569 20.0806 184.815 20.4178L198.747 39.4703C199.13 39.994 198.935 40.7324 198.331 40.9696C164.724 54.166 101.663 51.9229 69.4152 37.9037C68.9036 37.6813 68.6945 37.0859 68.9305 36.5805Z" fill="#ffffff" stroke="black" stroke-width="4"></path></svg>
                        </a>
                    </IconWrapper>
                </div>

                <div>
                    <IconWrapper className={"w-10 h-10 p-2"} switchConfig={() => switchConfig('shape', props.avatarConfig.shape, {
                        shape: ["circle", "rounded", "square"],
                    }, props.updateConfig)}>
                        <a
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Shape"
                        >
                            <div className="rounded-full bg-white w-6 h-6"></div>
                        </a>
                    </IconWrapper>
                </div>

                {/* Botão para randomizar o avatar */}
                <button className="mr-1" onClick={randomizeConfig}>
                    <FaShuffle />
                </button>
            </div>
        </div >
    )
};

export default AvatarEditor;