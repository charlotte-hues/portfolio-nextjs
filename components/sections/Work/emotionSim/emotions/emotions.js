import React from "react";
import styled from "styled-components";

import device from '../../../../shared/device/device';
import FlexContainer from '../../../../ui/project/FlexContainer';

const SVG = styled.svg.attrs({
    viewBox: "0 0 65 65",
    xmlns: "http://www.w3.org/2000/svg"
  })`
    width: 50px;
    height: 50px;
    padding: 0;
    top: 0;
    left: 0;
    fill: #7A8D9C;
    margin: 4px;

    @media ${device.laptop} {
        width: 65px;
        height: 65px;
  }
  `;

  const EmotionsContainer = styled.div`
    margin: 2% 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
const EmotionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    font-size: 0.75rem;
    margin: 4px 18px 0 0;
`;


export const Joy = (
    <EmotionContainer>
    <SVG>
        <path d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65ZM10.8681 26.8125H19.648C20.8622 32.7941 26.1507 37.2963 32.4907 37.2963C38.8307 37.2963 44.1192 32.7941 45.3334 26.8125H54.0359C53.3585 38.1443 43.954 47.125 32.452 47.125C20.95 47.125 11.5455 38.1443 10.8681 26.8125Z" />
    </SVG>
    Joy
    </EmotionContainer>);

export const Trust = (
    <EmotionContainer>
    <SVG >
        <path fillRule="evenodd" clipRule="evenodd" d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65ZM32.5 46C39.9558 46 46 39.9558 46 32.5C46 25.0442 39.9558 19 32.5 19C25.0442 19 19 25.0442 19 32.5C19 39.9558 25.0442 46 32.5 46Z"/>
    </SVG>
    Trust
    </EmotionContainer>);

export const Fear = (
    <EmotionContainer>
    <SVG >
        <path d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65ZM46.8452 20.7531L41.1698 30.5833L51 36.2588L44.8879 46.8452L35.0577 41.1697L29.3822 51L18.7958 44.8879L24.4713 35.0576L14.641 29.3821L20.7531 18.7957L30.5833 24.4712L36.2588 14.641L46.8452 20.7531Z" fill="#7A8D9C"/>
    </SVG>
    Fear
    </EmotionContainer>);

export const Suprise = (
    <EmotionContainer>
    <SVG >
        <circle cx="32.5" cy="32.5" r="32.5" fill="#7A8D9C"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M10.6565 35.2412C10.8812 31.6497 12.4332 27.8992 14.0244 25.1981C16.4184 21.1343 19.4459 17.4746 22.8596 14.2631L22.8879 14.2365C24.4003 12.8137 26.242 11.0809 28.5077 10.3539C29.8614 9.91953 31.1002 10.0905 32.196 10.6438C32.3383 10.5404 32.4827 10.4386 32.6291 10.3388C33.2976 9.88256 34.1637 9.35119 35.1023 9.08432C36.0629 8.81119 37.1638 8.80004 38.1921 9.48092C39.602 10.4145 40.754 11.8162 41.717 13.2563C42.4976 14.4234 43.1864 15.6673 43.7935 16.7638C43.9356 17.0204 44.0732 17.269 44.2065 17.5066C45.462 19.7447 46.773 22.3169 47.8651 25.0424C47.9247 25.1089 47.9837 25.1758 48.042 25.2432C48.6275 25.9201 49.1712 26.6802 49.5065 27.5709C50.1596 28.0445 50.7899 28.5805 51.3933 29.184C52.1094 29.9001 52.8481 30.8027 53.157 31.8118C53.3161 32.3316 53.3659 32.8949 53.2262 33.4725C53.0863 34.0512 52.7695 34.589 52.2816 35.0769C52.2305 35.128 52.1764 35.1829 52.1194 35.2407C51.6822 35.6845 51.0778 36.2978 50.4138 36.629C50.403 38.0922 50.2318 39.5357 49.8594 40.9308C49.7388 41.6719 49.5445 42.4141 49.2626 43.1544C48.2749 45.7493 46.5123 48.0119 44.6459 49.8925C43.4359 51.1118 41.3907 52.9647 39.1344 54.2044C36.9219 55.4201 34.2149 56.1979 31.9259 54.7183C30.1501 53.5705 28.849 51.6576 27.8698 49.6852C27.1483 48.2317 26.5772 46.6943 26.114 45.3103C22.6578 46.0273 19.062 46.2866 15.4901 44.4595C13.562 43.4733 12.2787 42.0862 11.518 40.4602C10.7633 38.847 10.5436 37.0449 10.6565 35.2412ZM25.6116 43.7508C22.3686 44.4079 19.2884 44.5771 16.2301 43.0128C14.6126 42.1855 13.5926 41.0597 12.9899 39.7716C12.3812 38.4706 12.1773 36.9574 12.2783 35.3427C12.4814 32.0973 13.9072 28.5985 15.4245 26.0229C17.7314 22.107 20.6577 18.5657 23.973 15.4467C25.5464 13.9666 27.1348 12.5011 29.0042 11.9012C29.6136 11.7057 30.1892 11.6863 30.742 11.8225C27.8197 14.458 25.9182 17.9254 24.8829 21.6621C24.3392 22.086 23.8461 22.5198 23.4174 22.9485C22.8979 23.468 22.7317 24.0993 22.8812 24.7295C23.0124 25.2825 23.3687 25.7587 23.7073 26.1274C23.8093 26.2386 23.9168 26.3474 24.0269 26.4531C23.9739 27.0597 23.9407 27.667 23.9266 28.2731C23.5754 28.4314 23.2282 28.5951 22.8859 28.7643C22.5994 28.906 22.3159 29.0485 22.0345 29.19C20.4546 29.9843 18.9403 30.7456 17.3315 31.1367C16.8955 31.2427 16.628 31.6821 16.734 32.1181C16.84 32.5542 17.2794 32.8217 17.7154 32.7157C19.5209 32.2767 21.2252 31.4181 22.7979 30.6257C23.0714 30.488 23.3408 30.3522 23.6062 30.221C23.7163 30.1665 23.827 30.1127 23.9383 30.0594C23.9502 30.4999 23.9628 30.9442 23.9771 31.3915C22.9193 32.3569 21.906 33.3596 20.9081 34.3575C20.8422 34.4235 20.7285 34.5206 20.5547 34.6662L20.5174 34.6975C20.3636 34.8263 20.1812 34.9791 20.0047 35.1387C19.8149 35.3102 19.6118 35.5074 19.4407 35.7153C19.281 35.9093 19.0889 36.1836 19.0096 36.5096C18.9455 36.7732 19.0013 37.0041 19.0626 37.1575C19.1238 37.3108 19.2103 37.4377 19.2851 37.5325C19.4342 37.7213 19.6239 37.8903 19.784 38.0205C20.0631 38.2475 20.5225 38.5552 20.4954 38.535C21.9572 39.6263 23.4788 40.6723 25.0499 41.6371C25.2108 42.3498 25.3966 43.0554 25.6116 43.7508ZM27.0202 42.7878C27.0769 42.9854 27.1359 43.1821 27.1974 43.3778C27.1995 43.3844 27.2016 43.391 27.2037 43.3976C27.4205 43.3462 27.6382 43.2935 27.8567 43.24C27.5765 43.0922 27.2977 42.9414 27.0202 42.7878ZM30.2943 42.6299C29.9646 42.4827 29.6268 42.3215 29.2801 42.1463C28.3375 41.6698 27.4072 41.1553 26.4915 40.6099C26.3502 39.9119 26.232 39.2057 26.1324 38.4938C27.0737 39.6772 28.2503 40.7321 29.5425 41.5684C30.0338 41.8864 30.5463 42.1757 31.0738 42.4298C30.8145 42.4971 30.5546 42.5638 30.2943 42.6299ZM30.158 44.3405C30.049 44.3679 29.9401 44.3952 29.8313 44.4224C29.6506 44.4677 29.4692 44.5133 29.2873 44.5591C29.013 44.6281 28.7375 44.6975 28.4607 44.7663C29.4826 44.9334 30.498 45.213 31.4633 45.4787C31.6696 45.5355 31.8736 45.5917 32.075 45.646C33.2581 45.9652 34.3655 46.2268 35.4277 46.2777C35.2174 46.0027 35.0175 45.7287 34.8291 45.4629C33.3292 45.403 31.7986 45.0209 30.158 44.3405ZM36.7715 47.8519C36.7058 47.8616 36.6402 47.8696 36.5747 47.8757C34.887 48.0347 33.2042 47.6338 31.6517 47.2149C31.4366 47.1569 31.2242 47.0986 31.0142 47.041C30.0379 46.7731 29.1141 46.5197 28.2129 46.3715C28.5388 47.2385 28.9063 48.1184 29.3254 48.9626C30.2558 50.837 31.3955 52.4406 32.808 53.3536C34.2969 54.316 36.2521 53.934 38.3519 52.7802C40.1133 51.8124 41.7729 50.4067 42.9465 49.2838C42.8869 49.2966 42.8272 49.3084 42.7675 49.319C42.0193 49.9063 41.0798 50.1848 39.9675 49.9096C38.7506 49.6086 37.6713 48.7755 36.7715 47.8519ZM44.5747 46.6111C44.5834 46.6032 44.592 46.5952 44.6007 46.5872C46.498 44.8314 47.6628 42.7964 48.268 40.5897C48.4744 39.2539 48.4084 37.9007 48.1616 36.5392C48.1377 36.5237 48.114 36.5078 48.0905 36.4914C47.8943 37.2151 47.5852 37.8915 47.1902 38.5236C46.8041 39.1416 46.338 39.7143 45.8212 40.248C45.7276 41.6668 45.4891 43.631 44.9799 45.403C44.8628 45.8104 44.7287 46.2173 44.5747 46.6111ZM45.8394 37.6185C45.936 37.4613 46.0258 37.3013 46.1081 37.1384C46.0157 37.2208 45.9212 37.3022 45.8275 37.3808C45.8318 37.46 45.8357 37.5392 45.8394 37.6185ZM50.3395 34.7037C50.5373 34.5259 50.7439 34.3182 50.9678 34.0931C51.0217 34.039 51.0766 33.9838 51.1325 33.9278C51.4433 33.6171 51.5876 33.3352 51.6467 33.0906C51.7061 32.8449 51.6931 32.5812 51.6032 32.2874C51.414 31.6693 50.9099 30.9986 50.2442 30.333C50.1237 30.2125 50.0019 30.0949 49.8788 29.9802C49.8762 30.3806 49.8457 30.7649 49.7885 31.1356C49.8994 31.6374 49.9974 32.1398 50.081 32.642C50.1954 33.3289 50.2829 34.0171 50.3395 34.7037ZM46.3779 25.8257C46.1254 25.5572 45.8592 25.2884 45.5834 25.0099L45.5601 24.9864C45.1192 24.5411 44.6545 24.0709 44.23 23.5737C44.2216 23.5639 44.213 23.5539 44.2043 23.5438C44.625 24.1741 45.0287 24.8143 45.4149 25.465C45.7389 25.5746 46.0601 25.6946 46.3779 25.8257ZM41.6936 20.052C41.7976 20.0602 41.9002 20.0747 42.0005 20.0945C42.522 20.1975 43.0189 20.4464 43.4463 20.7212C43.8259 20.9652 44.1865 21.2532 44.5055 21.5394C43.9431 20.4087 43.3627 19.3238 42.7893 18.3016C42.6474 18.0488 42.5039 17.7897 42.3579 17.5261C41.7524 16.433 41.1051 15.2643 40.3663 14.1596C39.4492 12.7883 38.4403 11.5943 37.2949 10.8358C36.7758 10.4921 36.2012 10.4613 35.5468 10.6474C34.8961 10.8324 34.2344 11.2157 33.6181 11.6314C34.8425 12.7272 35.8575 14.3027 36.6904 15.9667C36.7885 16.1625 36.8844 16.3605 36.9783 16.5601C37.2608 16.5021 37.562 16.4884 37.8666 16.5565C38.4372 16.684 38.9535 17.0144 39.3907 17.3792C39.8364 17.7511 40.2581 18.2081 40.638 18.6667C41.0038 19.1082 41.3724 19.6069 41.6936 20.052ZM35.495 17.2243C35.4108 17.0459 35.3249 16.869 35.2373 16.694C34.3922 15.0055 33.425 13.5739 32.3539 12.6868C32.3319 12.6685 32.3098 12.6505 32.2877 12.6327C29.8889 14.6406 28.172 17.265 27.071 20.1836C28.2477 19.4963 29.5362 18.9022 30.8535 18.4914C32.0178 18.1283 33.2379 17.8995 34.4391 17.891C34.5138 17.847 34.5885 17.8031 34.6634 17.7595C34.7778 17.6927 34.9079 17.6069 35.073 17.498C35.1111 17.4728 35.1512 17.4464 35.1933 17.4187C35.2872 17.357 35.3884 17.2911 35.495 17.2243ZM31.0652 20.1306C29.3412 20.7066 27.6731 21.6245 26.3084 22.6218C26.0466 23.6588 25.8537 24.7195 25.7271 25.7915C25.7739 25.8308 25.821 25.8701 25.8684 25.9094C25.9136 25.9468 25.9598 25.9848 26.0064 26.0233C26.8408 24.4743 27.8444 23.097 28.8261 22.0971C29.5305 21.3798 30.2823 20.7301 31.0652 20.1306ZM26.2716 29.462C26.323 29.3087 26.3773 29.1551 26.4342 29.0015C26.4359 28.9969 26.4377 28.9922 26.4394 28.9876C26.5216 28.9561 26.604 28.9248 26.6865 28.8938C26.7384 28.9459 26.7904 28.998 26.8423 29.0501C26.6494 29.1845 26.4591 29.322 26.2716 29.462ZM24.0958 34.16C24.1956 35.9167 24.3539 37.6945 24.6324 39.449C23.553 38.744 22.4967 38.0012 21.4675 37.2328C21.431 37.2056 21.3807 37.1716 21.3433 37.1462L21.3249 37.1337C21.2816 37.1044 21.2332 37.0716 21.1797 37.0346C21.0618 36.9529 20.9296 36.8577 20.8092 36.7598C20.7832 36.7386 20.7591 36.7184 20.7368 36.6992C20.8301 36.5926 20.9515 36.4733 21.0943 36.3442C21.2471 36.2061 21.407 36.0721 21.5646 35.9401L21.5985 35.9117C21.7543 35.7811 21.9299 35.6338 22.0572 35.5066C22.7149 34.8488 23.3702 34.1983 24.0342 33.5632C24.0477 33.7636 24.0681 33.9627 24.0958 34.16ZM20.551 36.5126L20.5519 36.514L20.551 36.5126ZM25.6473 32.5959C25.6552 32.4122 25.6692 32.2264 25.689 32.0386C25.8122 31.93 25.9361 31.8221 26.0605 31.7149C26.6861 31.1765 27.3367 30.6723 28.0071 30.2189C28.2727 30.4853 28.5385 30.7518 28.8046 31.0181C28.8145 31.0769 28.8248 31.1357 28.8353 31.1943C28.9104 31.6115 29.0024 32.0305 29.1036 32.4409C29.1214 33.1111 29.194 33.7815 29.31 34.4425C29.7215 36.788 30.6882 39.079 31.7855 40.9692C31.3227 40.7465 30.8674 40.4903 30.4254 40.2042C28.5035 38.9603 26.9171 37.2052 26.1044 35.3679C25.9158 34.9417 25.7878 34.4817 25.7146 33.9961C25.6885 33.5294 25.6665 33.0625 25.6473 32.5959ZM33.435 43.4766C33.3069 43.5127 33.1787 43.5485 33.0506 43.5839C33.2351 43.6266 33.4175 43.6639 33.598 43.6961C33.543 43.6227 33.4886 43.5495 33.435 43.4766ZM42.0573 47.7676C42.0712 47.7524 42.0851 47.7369 42.099 47.7212C42.6384 47.1097 43.0798 46.1313 43.4181 44.9542C43.7115 43.9332 43.9086 42.8314 44.0367 41.8257C43.7342 42.06 43.4266 42.286 43.1179 42.5043C43.0252 42.5699 42.9327 42.6344 42.8406 42.6979C42.7314 43.0042 42.5884 43.3031 42.4063 43.5913C41.8649 44.4478 40.9735 45.4455 39.9679 46.2563C39.7029 46.4701 39.4214 46.6777 39.1284 46.8692C39.9699 47.3889 40.804 47.7051 41.6064 47.7628C41.7557 47.7735 41.9061 47.7755 42.0573 47.7676ZM37.7174 45.819C38.1157 45.6071 38.5324 45.3264 38.9479 44.9913C39.0944 44.8732 39.2377 44.7508 39.3767 44.6257C38.633 44.9288 37.892 45.1527 37.1429 45.2936C37.3314 45.475 37.523 45.6506 37.7174 45.819ZM35.7791 43.8296C35.8293 43.8265 35.8795 43.8229 35.9295 43.8189C37.6874 43.6786 39.4369 42.9912 41.4358 41.6842C41.5134 41.2847 41.5257 40.8519 41.4816 40.3917C41.4601 40.396 41.4385 40.4001 41.4169 40.4041C41.2263 40.5071 41.0346 40.6077 40.8418 40.7059C40.8367 40.7163 40.8315 40.7266 40.8262 40.7369C40.046 42.2789 38.6976 43.3539 36.6419 43.5547C36.29 43.589 35.9358 43.6007 35.5807 43.5913C35.6461 43.671 35.7123 43.7505 35.7791 43.8296ZM39.006 19.2648C38.785 19.0231 38.5651 18.8067 38.3497 18.627C38.0943 18.4139 37.8747 18.2774 37.6933 18.2015C37.6973 18.2114 37.7013 18.2213 37.7053 18.2312C38.1426 18.4144 38.5302 18.7391 38.8959 19.1861C38.9328 19.2119 38.9695 19.2381 39.006 19.2648ZM28.8114 24.6237C28.3028 25.3092 27.8085 26.0896 27.3671 26.925C27.7904 26.781 28.2163 26.6432 28.6437 26.5113C28.6247 25.8592 28.6801 25.2289 28.8114 24.6237ZM34.2478 41.5448C35.4178 41.189 36.5668 40.7985 37.6841 40.3513C36.1691 39.8373 34.8312 38.71 33.7343 37.4548C32.7347 36.3108 31.8628 34.9843 31.1467 33.7136C31.264 34.0949 31.3801 34.4544 31.4859 34.7821C31.567 35.0332 31.6421 35.2657 31.7071 35.4751C32.3596 37.5765 33.187 39.6332 34.2478 41.5448ZM37.391 22.2046C37.1533 21.4452 36.8839 20.6417 36.5822 19.8299C36.5095 19.8058 36.4362 19.7833 36.3623 19.7621C36.3317 19.7707 36.2997 19.78 36.2664 19.7902C36.0313 19.862 35.7743 19.9596 35.4528 20.0816C35.4044 20.1 35.3545 20.1189 35.303 20.1384C32.9221 21.0392 31.4244 22.3563 30.7315 23.94C30.5567 24.3396 30.4286 24.7664 30.3514 25.2203C30.451 25.1113 30.5574 24.9993 30.6679 24.8912C30.8808 24.6828 31.1392 24.4587 31.4258 24.2952C31.7052 24.1359 32.107 23.9802 32.5618 24.0669C32.7503 24.1029 32.9314 24.1666 33.1017 24.2455C33.3697 24.0389 33.6468 23.8425 33.9304 23.6585C34.9871 22.973 36.1827 22.4298 37.391 22.2046ZM45.9864 31.7332C46.0383 31.7954 46.0903 31.8575 46.1425 31.9195C46.0887 31.7612 46.0323 31.6028 45.9734 31.4443C45.9788 31.5404 45.9832 31.6367 45.9864 31.7332ZM37.8581 23.7734C36.8977 23.9211 35.8671 24.3509 34.8886 24.9743C35.9495 24.782 37.0178 24.6479 38.0829 24.5844C38.0135 24.328 37.9385 24.0568 37.8581 23.7734ZM38.5032 26.1883C37.6646 26.2264 36.8173 26.3128 35.9662 26.4419C36.907 26.5948 37.8571 26.8968 38.8069 27.3772C38.7094 26.988 38.6171 26.6302 38.5349 26.3112C38.5241 26.2696 38.5136 26.2286 38.5032 26.1883ZM40.7656 28.5756C40.5574 27.6585 40.3493 26.8399 40.1789 26.1785C40.2427 26.1808 40.3065 26.1834 40.3702 26.1862C40.4133 26.2747 40.4544 26.3582 40.4926 26.4359C40.5268 26.5054 40.5588 26.5704 40.5879 26.6302C41.1824 27.8514 41.8875 28.9969 42.6577 30.0888C42.0543 29.5567 41.4259 29.0452 40.7656 28.5756ZM39.3175 29.553C38.9678 29.3241 38.6095 29.1102 38.2408 28.9141C37.9154 28.741 37.5889 28.5931 37.2615 28.4688C38.1977 29.7032 39.0506 31.0025 39.8281 32.3272C39.686 31.3672 39.506 30.4272 39.3175 29.553ZM41.7502 35.9166C41.75 35.7769 41.7482 35.637 41.745 35.4971C41.7114 34.0169 41.5172 32.4752 41.2633 31.0296C42.0926 31.7394 42.8896 32.5136 43.6858 33.3068C43.7947 33.8578 43.888 34.4132 43.9656 34.9726C43.9587 34.9954 43.9517 35.0183 43.9445 35.041C43.6287 36.0522 43.1413 36.9434 42.4719 37.6309C42.2581 37.0402 42.0084 36.4627 41.7502 35.9166ZM40.122 36.2811C40.1052 37.1289 40.0225 37.9172 39.8606 38.619C38.6392 38.0734 37.475 37.1923 36.3398 36.1659C35.5672 35.4673 34.8469 34.7394 34.1367 34.0218C33.749 33.63 33.3643 33.2413 32.9758 32.8621C32.6623 32.5561 32.3497 32.2492 32.0379 31.9416C31.6673 31.2212 31.3541 30.5405 31.1062 29.9539C31.0805 29.8932 31.0555 29.8327 31.031 29.7725C31.1612 29.3093 31.3351 28.8609 31.5568 28.4313C32.6079 28.0898 33.6812 27.9149 34.7598 27.9575C36.4588 29.9257 37.9166 32.1606 39.1679 34.4625C39.4647 35.0082 39.7997 35.6247 40.122 36.2811ZM47.2407 28.0483C47.0534 27.943 46.8642 27.8427 46.6732 27.747C47.1501 28.6814 47.5915 29.6366 47.9952 30.6134C47.7788 29.755 47.5247 28.8981 47.2407 28.0483ZM44.2471 38.8775C44.2472 39.0577 44.2428 39.2786 44.2325 39.5318C43.8853 39.8576 43.5116 40.1733 43.1182 40.4812C43.1032 40.2415 43.0761 40.002 43.0392 39.7642C43.3089 39.6034 43.5647 39.4249 43.8046 39.2398C43.9535 39.1249 44.1012 39.0034 44.2471 38.8775Z" fill="#E8E3E4"/>
    </SVG>
    Suprise
    </EmotionContainer>);

export const Sadness = (
    <EmotionContainer>
    <SVG >
        <path d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65ZM54.534 40.0016H45.5907C44.3538 33.9086 38.9669 29.3225 32.5088 29.3225C26.0507 29.3225 20.6637 33.9085 19.4269 40.0016H10.5621C11.2522 28.4587 20.8318 19.3108 32.548 19.3108C44.2643 19.3108 53.8439 28.4588 54.534 40.0016Z" fill="#7A8D9C"/>
    </SVG>
    Sadness
    </EmotionContainer>);

export const Disgust = (
    <EmotionContainer>
    <SVG >
        <path fillRule="evenodd" clipRule="evenodd" d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65ZM19.4202 32.6516C19.7765 31.8289 20.6633 29.399 21.4488 27.2151C21.6868 26.5535 21.917 25.91 22.1227 25.3339C22.5236 26.8746 22.8174 28.4513 23.1178 30.0631L23.1179 30.0631C23.1569 30.2724 23.196 30.4823 23.2354 30.6927C23.7281 33.3192 24.275 36.0238 25.3848 38.6371C25.4327 38.7499 25.4974 38.8824 25.5871 39.0012C25.6537 39.0895 25.8646 39.3485 26.2429 39.3867C26.6923 39.432 26.9626 39.1415 27.0577 39.0103C27.1576 38.8725 27.2101 38.7261 27.2386 38.6347C27.3502 38.2773 27.3987 37.7141 27.4266 37.213C27.473 36.378 27.4741 35.3505 27.4746 34.9025V34.9024C27.4747 34.7916 27.4748 34.7163 27.4755 34.6882C27.4987 33.7809 27.714 32.9193 27.9624 31.971L27.9934 31.8527C28.1485 31.2619 28.3137 30.6326 28.4225 29.9718C28.5924 30.4765 28.7467 31.0137 28.8934 31.5732C29.0201 32.0564 29.1421 32.5613 29.2648 33.0695C29.542 34.2177 29.8234 35.3829 30.1734 36.3528C30.2073 36.4468 30.2606 36.6096 30.3296 36.8207L30.3297 36.8211C30.5352 37.4494 30.8806 38.5053 31.2732 39.4502C31.5395 40.0913 31.8529 40.7483 32.2011 41.2576C32.3748 41.5117 32.5793 41.7621 32.818 41.9563C33.0544 42.1487 33.387 42.3356 33.7971 42.3356C34.1842 42.3356 34.423 42.0997 34.5228 41.9739C34.627 41.8426 34.6889 41.7005 34.7262 41.6009C34.804 41.3934 34.8574 41.1417 34.8977 40.8992C34.9806 40.4006 35.0369 39.7547 35.0771 39.1262C35.1176 38.4915 35.1432 37.8484 35.161 37.3465C35.1656 37.2181 35.1695 37.1024 35.1731 36.9978L35.1731 36.9962C35.1767 36.8923 35.1798 36.7994 35.1828 36.716C35.1858 36.6343 35.1884 36.5686 35.1908 36.5191C35.1925 36.4835 35.1937 36.4645 35.1942 36.4569L35.1942 36.4568V36.4567C35.1945 36.4523 35.1945 36.4521 35.1942 36.455C35.2955 35.5426 35.3901 34.6313 35.4845 33.7219L35.4845 33.7218L35.4846 33.7212C35.6193 32.4242 35.7535 31.1312 35.9062 29.8453C36.1854 31.2142 36.486 32.6427 36.829 34.0543C37.5798 37.1451 38.5528 40.2422 40.012 42.5077C40.1272 42.6865 40.4535 43.1158 41.0238 43.0576C41.288 43.0306 41.4813 42.9022 41.601 42.7931C41.7192 42.6853 41.8024 42.564 41.8598 42.4658C42.0697 42.1071 42.2054 41.5741 42.2984 41.132C42.3989 40.6542 42.4758 40.1435 42.5291 39.7495C42.556 39.5512 42.5772 39.3794 42.5926 39.2537L42.6045 39.1571C42.6089 39.121 42.6115 39.0999 42.6127 39.0895C42.6138 39.0792 42.6135 39.0795 42.6122 39.0863C42.8808 37.7326 43.1817 36.247 43.616 34.8303C43.8892 33.9393 44.209 33.0968 44.5939 32.3477C44.6581 32.8255 44.735 33.2971 44.816 33.7616C44.8749 34.0997 44.9355 34.4312 44.9954 34.7588C45.1348 35.5219 45.2703 36.2638 45.3729 37.0192C45.4 37.219 45.4214 37.3927 45.4396 37.5429L45.4469 37.6029C45.4618 37.7262 45.4755 37.8389 45.4883 37.9318C45.5017 38.028 45.5207 38.1551 45.553 38.2665C45.5671 38.3149 45.6032 38.4332 45.686 38.5536C45.7723 38.6791 46.0216 38.9528 46.4453 38.9194C46.7784 38.8931 46.9709 38.6831 47.0139 38.6359C47.082 38.561 47.1284 38.4855 47.1532 38.4431C47.2056 38.3536 47.2562 38.2453 47.2988 38.1522C47.3271 38.0902 47.3567 38.024 47.3887 37.9524L47.3888 37.9521C47.4655 37.7808 47.5562 37.578 47.6774 37.3247C48.0364 36.5743 48.3723 35.8183 48.7047 35.0703L48.7047 35.0702C49.2672 33.8042 49.8194 32.5614 50.4562 31.408C50.6606 31.0378 50.8597 30.704 51.0601 30.4324C51.2662 30.1531 51.4355 29.9929 51.5621 29.9172C51.6606 29.8584 51.6947 29.8687 51.7278 29.8795C51.8022 29.9037 51.9933 30.0062 52.2817 30.3857C52.9512 31.2665 53.4813 32.2721 54.0476 33.3562L54.0806 33.4193C54.6264 34.4644 55.2092 35.5802 55.9609 36.5932C56.9221 37.8885 57.6875 39.0437 57.6875 40.4339C57.6875 40.8826 58.0513 41.2464 58.5 41.2464C58.9487 41.2464 59.3125 40.8826 59.3125 40.4339C59.3125 38.4411 58.2004 36.8842 57.2659 35.6248C56.591 34.7154 56.0588 33.6966 55.4939 32.6152L55.488 32.6038C54.9318 31.5391 54.3416 30.4103 53.5754 29.4024C53.1894 28.8945 52.7501 28.5038 52.232 28.3347C51.6727 28.1521 51.1524 28.2689 50.7283 28.5224C50.3324 28.7591 50.0111 29.1171 49.7525 29.4676C49.4882 29.8259 49.2484 30.2336 49.0336 30.6226C48.3692 31.826 47.7583 33.1982 47.1714 34.5165C47.0351 34.8227 46.9001 35.126 46.766 35.4235C46.7077 35.0889 46.6469 34.756 46.5868 34.4269L46.5867 34.4267C46.5285 34.1077 46.4708 33.7923 46.4168 33.4824C46.2275 32.3969 46.0746 31.3437 46.0469 30.2892C46.0435 30.16 46.0384 30.0455 46.03 29.9494C46.0236 29.8754 46.01 29.7355 45.9622 29.6005C45.9434 29.5472 45.875 29.3586 45.6863 29.208C45.5756 29.1197 45.4245 29.0459 45.2416 29.0297C45.0639 29.0139 44.9157 29.0577 44.8127 29.1063C44.6331 29.191 44.5303 29.3185 44.4999 29.3566C44.4561 29.4115 44.4242 29.4639 44.4052 29.4965C44.3655 29.5647 44.306 29.6875 44.2631 29.7759C44.247 29.8091 44.2333 29.8374 44.2238 29.8562C44.1653 29.9726 44.1101 30.069 44.055 30.1422C43.145 31.3509 42.5229 32.8519 42.0624 34.354C41.6006 35.8605 41.2856 37.4229 41.0182 38.77C41.008 38.8214 40.9952 38.9273 40.9847 39.0146L40.9796 39.0564C40.9645 39.1799 40.9442 39.3436 40.9188 39.5316C40.8774 39.8371 40.8234 40.1994 40.7576 40.5491C39.773 38.6437 39.0286 36.2252 38.408 33.6707C38.0381 32.1479 37.7168 30.5983 37.4141 29.1058L37.285 28.468L37.2848 28.4674C37.0303 27.2087 36.7855 25.9977 36.5345 24.9065L36.5337 24.9034C36.5241 24.8614 36.4908 24.7159 36.3977 24.5751C36.3538 24.5087 36.205 24.3006 35.9077 24.2254C35.5478 24.1344 35.2733 24.3034 35.1487 24.4173C35.0372 24.5192 34.9801 24.6275 34.9588 24.6701C34.9316 24.7244 34.9137 24.7734 34.9027 24.8064C34.8806 24.8728 34.8653 24.9385 34.8547 24.9893C34.8136 25.1861 34.779 25.4793 34.7502 25.7568C34.719 26.0582 34.6927 26.3565 34.6707 26.6062L34.6707 26.6063C34.6472 26.8721 34.6286 27.0828 34.6141 27.1835C34.3099 29.2994 34.0858 31.4576 33.8644 33.5894L33.8644 33.5896C33.7708 34.4914 33.6776 35.3885 33.5791 36.2756C33.5681 36.3746 33.5587 36.6539 33.5473 36.99C33.5441 37.086 33.5407 37.1865 33.5371 37.2889C33.5194 37.7866 33.4944 38.4113 33.4554 39.0226C33.4317 39.3932 33.4034 39.7498 33.3696 40.0652C33.1709 39.7243 32.9693 39.2972 32.7738 38.8268C32.4089 37.9484 32.1172 37.056 31.9106 36.4238L31.9106 36.4237C31.8268 36.1674 31.757 35.9538 31.7019 35.8012C31.3827 34.9165 31.1373 33.8991 30.8725 32.8005L30.8724 32.8001C30.7447 32.2706 30.6125 31.7224 30.4653 31.161C30.0314 29.5066 29.4703 27.7665 28.4872 26.4844C28.436 26.4176 28.3178 26.2847 28.1124 26.2121C27.872 26.1272 27.634 26.1669 27.4557 26.2629C27.3054 26.3439 27.2195 26.451 27.1828 26.5016C27.141 26.5591 27.1154 26.6104 27.1018 26.6398C27.0593 26.7318 27.043 26.8151 27.0404 26.8285L27.0403 26.8285L27.0401 26.8299C27.0301 26.8791 27.0245 26.9273 27.0216 26.9528C27.0147 27.0149 27.0082 27.0952 27.0022 27.1791C26.9899 27.3511 26.9766 27.5817 26.9643 27.814C26.9452 28.1729 26.9274 28.5541 26.9184 28.7462L26.9184 28.7464L26.913 28.8606C26.8697 29.7305 26.6515 30.5634 26.4065 31.4981L26.3905 31.5591C26.1459 32.4927 25.8797 33.5258 25.851 34.6466C25.8493 34.7141 25.8491 34.8399 25.8489 35.0067C25.4315 33.5028 25.127 31.9628 24.8326 30.3931C24.7923 30.1782 24.7522 29.9627 24.7119 29.7466C24.2644 27.3428 23.8039 24.8695 22.9475 22.4763C22.5563 22.0286 21.744 22.066 21.562 22.2255C21.5249 22.2728 21.4783 22.3448 21.4658 22.3673C21.4495 22.3978 21.4382 22.424 21.4362 22.4287L21.4362 22.4287C21.4297 22.4438 21.4246 22.4567 21.4233 22.4602C21.4192 22.4707 21.4151 22.4816 21.4121 22.4898C21.4054 22.5079 21.3964 22.5327 21.3857 22.5622C21.3641 22.622 21.3329 22.7093 21.2934 22.8198C21.237 22.978 21.1629 23.1859 21.075 23.4329L21.0735 23.4372L20.9636 23.7458C20.6882 24.5192 20.3146 25.5673 19.9197 26.6651C19.124 28.8774 18.2592 31.2433 17.929 32.0059L17.8175 32.2638L17.8174 32.2639C17.5289 32.9313 17.2907 33.4822 17.074 33.9132C16.9857 34.0889 16.9069 34.2325 16.8362 34.3475C16.6925 34.1003 16.5082 33.7036 16.2808 33.0997C16.0883 32.5883 15.0806 30.5298 14.1263 28.6798C13.6429 27.7427 13.1598 26.8331 12.7823 26.1679C12.5953 25.8385 12.4251 25.5528 12.2892 25.3507C12.2256 25.2562 12.1474 25.1464 12.0643 25.0571C12.0315 25.0218 11.9442 24.9296 11.8146 24.8582C11.7492 24.822 11.6093 24.7551 11.4196 24.7518C11.1929 24.7478 10.9627 24.8374 10.7955 25.019C10.2029 25.663 9.85544 26.6108 9.57277 27.3818L9.53703 27.4792C9.21428 28.3574 8.94305 29.0587 8.54062 29.5203C7.26227 30.9867 6.6844 32.7235 6.12837 34.3947L6.12834 34.3948C5.999 34.7835 5.87084 35.1687 5.73532 35.5461C5.58366 35.9684 5.80309 36.4337 6.22542 36.5854C6.64774 36.737 7.11305 36.5176 7.2647 36.0953C7.42929 35.637 7.57619 35.199 7.71693 34.7794C8.2657 33.1434 8.72086 31.7865 9.76553 30.5881C10.389 29.8729 10.7509 28.8875 11.0423 28.094L11.0623 28.0397C11.1946 27.6798 11.3139 27.3603 11.4323 27.082C11.7847 27.7089 12.2297 28.5476 12.6821 29.4247C13.6546 31.31 14.6087 33.2703 14.76 33.6722C15.0838 34.5324 15.3983 35.2046 15.746 35.6225C15.923 35.8353 16.1768 36.0665 16.5263 36.159C16.9168 36.2623 17.2692 36.1534 17.533 35.9769C17.7723 35.8167 17.9568 35.5923 18.0997 35.3847C18.2483 35.1686 18.3895 34.9144 18.5259 34.6431C18.7653 34.1668 19.0241 33.568 19.3078 32.9115L19.4202 32.6516Z" fill="#7A8D9C"/>
    </SVG>
    Disgust
    </EmotionContainer>);

export const Anger = (
    <EmotionContainer>
    <SVG >
        <path fillRule="evenodd" clipRule="evenodd" d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65ZM46 18H18V46H46V18Z" fill="#7A8D9C"/>
    </SVG>
    Anger
    </EmotionContainer>);

export const Anticipation = (
    <EmotionContainer>
    <SVG >
        <path fillRule="evenodd" clipRule="evenodd" d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65ZM50.3205 40L33 16L15.6795 40H50.3205Z" fill="#7A8D9C"/>
    </SVG>
    Anticipation
    </EmotionContainer>);



const Emotions = () => {
    
    return (
    <EmotionsContainer>
        <EmotionsContainer>
            {Joy}
            {Trust}
            {Fear}
            {Suprise}
        </EmotionsContainer>
        <EmotionsContainer>
            {Sadness}
            {Disgust}
            {Anger}
            {Anticipation}
        </EmotionsContainer>
    </EmotionsContainer>
)};


export const EmotionsDescription = (
    <FlexContainer>
    <h3 style={{minWidth: "30%"}}>The 8 Primary emotions</h3>
    <p>
        These are thought to be the eight primary emotions that humans universally experience. This theory is attributed to psychologist Robert Plutchik and his work in the 1980s.

        Any emotion sits somewhere in between these eight emotions with varying levels of intensity.
    </p>
    </FlexContainer>
)

export default Emotions;