import { IconProps } from "../../types"

export default function CarFerryFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.962587904877484 35.068359375"
          className={className}
        >
          <path
            d="              M4.9895 19.7554H6.2335C7.0125 19.7554 7.6275 19.1404 7.6275 18.3614V16.4884C9.7605 16.6384 13.1375 16.7614 15.9675 16.7614C18.7975 16.7614 22.1745 16.6524 24.3075 16.5024V18.3614C24.3075 19.1404 24.9225 19.7554 25.7015 19.7554H26.9465C27.7255 19.7554 28.3405 19.1404 28.3405 18.3614V12.0854C28.3405 10.1304 28.0945 9.0644 27.1645 7.8614L26.1665 6.7124C25.8115 5.0034 25.1825 3.2264 24.8405 2.5154C24.2395 1.2034 23.0495 0.3964 21.5185 0.1914C20.6435 0.0684 18.7835 0.0004 15.9675 0.0004C13.1515 0.0004 11.2915 0.0684 10.4165 0.1914C8.8855 0.3964 7.6965 1.2034 7.0945 2.5154C6.7525 3.2264 6.1235 5.0034 5.7685 6.7124L4.7705 7.8614C3.8405 9.0644 3.5945 10.1304 3.5945 12.0854V18.3614C3.5945 19.1404 4.2095 19.7554 4.9895 19.7554ZM8.7765 5.5094C8.9125 4.9494 9.1725 4.1284 9.3365 3.8004C9.6925 3.0764 10.1575 2.8024 11.0455 2.6934C11.5375 2.6254 13.2055 2.5844 15.9675 2.5844C18.7295 2.5844 20.3975 2.6114 20.8895 2.6934C21.7785 2.8164 22.2425 3.0764 22.5985 3.8004C22.7625 4.1284 23.0225 4.9494 23.1585 5.5094C23.3095 6.1524 23.0355 6.5484 22.3385 6.5354C21.3675 6.5214 19.6455 6.4394 15.9675 6.4394C12.2895 6.4394 10.5805 6.5214 9.5965 6.5354C8.8995 6.5484 8.6125 6.1524 8.7765 5.5094ZM8.5845 13.7674C7.5325 13.7674 6.7395 12.9604 6.7395 11.9214C6.7395 10.8694 7.5325 10.0624 8.5845 10.0624C9.6375 10.0624 10.4445 10.8694 10.4445 11.9214C10.4445 12.9604 9.6375 13.7674 8.5845 13.7674ZM23.3505 13.7674C22.2975 13.7674 21.4915 12.9604 21.4915 11.9214C21.4915 10.8694 22.2975 10.0624 23.3505 10.0624C24.4035 10.0624 25.1965 10.8694 25.1965 11.9214C25.1965 12.9604 24.4035 13.7674 23.3505 13.7674ZM13.1785 13.2754C12.3995 13.2754 11.8255 12.7014 11.8255 11.9214C11.8255 11.1284 12.3995 10.5544 13.1785 10.5544H18.7565C19.5355 10.5544 20.1105 11.1284 20.1105 11.9214C20.1105 12.7014 19.5355 13.2754 18.7565 13.2754ZM0.8465 26.2914L2.9795 29.1074C3.2115 28.9844 3.5125 28.7934 3.9225 28.5054C5.8645 27.0704 7.3955 26.4554 9.2545 26.4554C11.1275 26.4554 12.6455 27.0704 14.6005 28.5054C15.6805 29.3124 15.7625 29.3394 15.9815 29.3394C16.2005 29.3394 16.2825 29.3124 17.3345 28.5194C19.3035 27.0704 20.8345 26.4554 22.7075 26.4554C24.5675 26.4554 26.1125 27.0704 28.0395 28.5054C28.4505 28.7934 28.7505 28.9844 28.9835 29.1074L31.1165 26.2914C32.9485 23.8984 31.6625 21.1774 28.6415 21.1774H3.3215C0.2995 21.1774 -0.9855 23.8984 0.8465 26.2914ZM2.0905 35.0684H2.2135C7.0675 35.0684 7.3675 32.1834 9.2545 32.1834C11.1275 32.1834 11.5785 35.0684 15.9815 35.0684C20.3835 35.0684 20.8345 32.1834 22.7075 32.1834C24.5945 32.1834 24.8955 35.0684 29.7485 35.0684H29.8855C30.8975 35.0684 31.7035 34.2614 31.7035 33.2504C31.7035 32.2524 30.8975 31.4454 29.8855 31.4454H29.7485C28.8055 31.4454 28.0945 31.1034 26.8235 30.2014C25.8935 29.5174 24.5535 28.5464 22.7075 28.5464C20.8625 28.5464 19.5225 29.5174 18.6065 30.2014C17.6085 30.9254 16.9795 31.4454 15.9815 31.4454C14.9835 31.4454 14.3545 30.9254 13.3695 30.2014C12.4405 29.5174 11.1005 28.5464 9.2545 28.5464C7.4085 28.5464 6.0695 29.5174 5.1395 30.2014C3.8675 31.1034 3.1575 31.4454 2.2135 31.4454H2.0905C1.0785 31.4454 0.2585 32.2524 0.2585 33.2504C0.2585 34.2614 1.0785 35.0684 2.0905 35.0684Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.169406177610227 33.60546875"
          className={className}
        >
          <path
            d="              M4.8384 19.1408H6.0414C6.8074 19.1408 7.4084 18.5528 7.4084 17.7868V16.0238C9.5824 16.1598 12.8774 16.2698 15.5714 16.2698C18.2784 16.2698 21.5594 16.1738 23.7464 16.0238V17.7868C23.7464 18.5528 24.3344 19.1408 25.1004 19.1408H26.3174C27.0824 19.1408 27.6704 18.5528 27.6704 17.7868V11.7718C27.6704 9.9528 27.3834 8.9548 26.4534 7.7518L25.5374 6.6308C25.1684 4.8808 24.5264 3.0488 24.1844 2.3238C23.6104 1.0938 22.5024 0.3558 21.0674 0.1638C20.3014 0.0688 18.2784 -0.0002 15.5714 -0.0002C12.8774 -0.0002 10.8544 0.0688 10.0754 0.1638C8.6534 0.3418 7.5454 1.0938 6.9714 2.3238C6.6294 3.0488 5.9874 4.8808 5.6174 6.6308L4.7014 7.7518C3.7724 8.9548 3.4714 9.9528 3.4714 11.7718V17.7868C3.4714 18.5528 4.0734 19.1408 4.8384 19.1408ZM8.1334 5.6058C8.3114 4.7848 8.6944 3.6638 8.9404 3.2128C9.2414 2.6108 9.6374 2.3648 10.3484 2.2698C10.9634 2.1878 12.6454 2.1328 15.5714 2.1328C18.4964 2.1328 20.1784 2.1738 20.8074 2.2698C21.5184 2.3788 21.9014 2.6108 22.2154 3.2128C22.4614 3.6508 22.8304 4.7848 23.0224 5.6058C23.1454 6.1108 22.9264 6.3848 22.3794 6.3708C21.0674 6.3028 19.2214 6.2068 15.5714 6.2068C11.9344 6.2068 10.0884 6.3028 8.7624 6.3708C8.2294 6.3848 8.0104 6.1108 8.1334 5.6058ZM8.2834 13.4258C7.2994 13.4258 6.5474 12.6738 6.5474 11.7028C6.5474 10.7188 7.2994 9.9668 8.2834 9.9668C9.2544 9.9668 10.0064 10.7188 10.0064 11.7028C10.0064 12.6738 9.2544 13.4258 8.2834 13.4258ZM22.8714 13.4258C21.8874 13.4258 21.1494 12.6738 21.1494 11.7028C21.1494 10.7188 21.8874 9.9668 22.8714 9.9668C23.8564 9.9668 24.5944 10.7188 24.5944 11.7028C24.5944 12.6738 23.8564 13.4258 22.8714 13.4258ZM12.8644 12.9878C12.1254 12.9878 11.6064 12.4688 11.6064 11.7308C11.6064 10.9918 12.1254 10.4728 12.8644 10.4728H18.2914C19.0164 10.4728 19.5494 10.9918 19.5494 11.7308C19.5494 12.4688 19.0164 12.9878 18.2914 12.9878ZM0.7234 25.0058L3.2804 28.4098C3.4714 28.3008 3.7034 28.1508 4.0044 27.9318C5.7544 26.6468 7.1904 26.0178 8.9674 26.0178C10.7854 26.0178 12.2214 26.6738 13.9984 27.9858C15.0244 28.7518 15.2014 28.8478 15.5844 28.8478C15.9534 28.8478 16.1314 28.7518 17.0754 28.0548C18.8934 26.6878 20.3424 26.0178 22.1884 26.0178C23.9794 26.0178 25.4144 26.6468 27.1644 27.9318C27.4514 28.1508 27.6844 28.3008 27.8754 28.4098L30.4464 25.0058C31.9914 22.9958 30.9514 20.6988 28.3674 20.6988H2.8014C0.2174 20.6988 -0.8216 22.9958 0.7234 25.0058ZM1.9264 33.6058H2.0354C6.5884 33.6058 6.9164 30.7758 8.9674 30.7758C10.9914 30.7758 11.5244 33.6058 15.5844 33.6058C19.6454 33.6058 20.1644 30.7758 22.1884 30.7758C24.2524 30.7758 24.5804 33.6058 29.1334 33.6058H29.2294C30.0084 33.6058 30.6234 32.9898 30.6234 32.2108C30.6234 31.4448 30.0084 30.8298 29.2294 30.8298H29.1334C27.9304 30.8298 27.1514 30.3518 26.0024 29.5448C25.1004 28.8748 23.8694 27.9998 22.1884 27.9998C20.4924 27.9998 19.2484 28.9028 18.3464 29.5718C17.3754 30.2968 16.6924 30.8298 15.5844 30.8298C14.4774 30.8298 13.7804 30.2968 12.8234 29.5718C11.9074 28.9028 10.6764 27.9998 8.9674 27.9998C7.2854 27.9998 6.0694 28.8748 5.1664 29.5448C4.0044 30.3518 3.2394 30.8298 2.0354 30.8298H1.9264C1.1604 30.8298 0.5454 31.4448 0.5454 32.2108C0.5454 32.9898 1.1604 33.6058 1.9264 33.6058Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.589606235201966 34.37109375"
          className={className}
        >
          <path
            d="              M4.9222 19.4683H6.1392C6.9182 19.4683 7.5202 18.8673 7.5202 18.0883V16.2693C9.6802 16.4203 13.0162 16.5153 15.7782 16.5153C18.5532 16.5153 21.8892 16.4203 24.0492 16.2693V18.0883C24.0492 18.8673 24.6512 19.4683 25.4162 19.4683H26.6472C27.4262 19.4683 28.0282 18.8673 28.0282 18.0883V11.9353C28.0282 10.0493 27.7542 9.0093 26.8252 7.8063L25.8682 6.6723C25.5122 4.9493 24.8692 3.1443 24.5282 2.4203C23.9402 1.1483 22.7912 0.3693 21.3152 0.1773C20.4812 0.0683 18.5392 0.0003 15.7782 0.0003C13.0302 0.0003 11.0882 0.0683 10.2542 0.1773C8.7782 0.3693 7.6292 1.1483 7.0412 2.4203C6.7002 3.1443 6.0572 4.9493 5.7022 6.6723L4.7442 7.8063C3.8152 9.0093 3.5412 10.0493 3.5412 11.9353V18.0883C3.5412 18.8673 4.1432 19.4683 4.9222 19.4683ZM8.4772 5.5503C8.6412 4.8673 8.9552 3.8963 9.1472 3.5133C9.4892 2.8433 9.9122 2.5973 10.7192 2.4883C11.2802 2.4063 12.9482 2.3653 15.7782 2.3653C18.6212 2.3653 20.2892 2.4063 20.8502 2.4883C21.6572 2.5973 22.0802 2.8433 22.4222 3.5133C22.6142 3.8963 22.9282 4.8673 23.0922 5.5503C23.2292 6.1253 22.9832 6.4663 22.3542 6.4533C21.2192 6.4123 19.4552 6.3303 15.7782 6.3303C12.1272 6.3303 10.3502 6.4123 9.2022 6.4533C8.5862 6.4663 8.3272 6.1253 8.4772 5.5503ZM8.4502 13.6033C7.4242 13.6033 6.6592 12.8243 6.6592 11.8123C6.6592 10.7873 7.4242 10.0213 8.4502 10.0213C9.4612 10.0213 10.2412 10.7873 10.2412 11.8123C10.2412 12.8243 9.4612 13.6033 8.4502 13.6033ZM23.1192 13.6033C22.1082 13.6033 21.3282 12.8243 21.3282 11.8123C21.3282 10.7873 22.1082 10.0213 23.1192 10.0213C24.1452 10.0213 24.9102 10.7873 24.9102 11.8123C24.9102 12.8243 24.1452 13.6033 23.1192 13.6033ZM13.0302 13.1383C12.2782 13.1383 11.7172 12.5783 11.7172 11.8263C11.7172 11.0603 12.2782 10.5133 13.0302 10.5133H18.5392C19.2912 10.5133 19.8382 11.0603 19.8382 11.8263C19.8382 12.5783 19.2912 13.1383 18.5392 13.1383ZM0.7802 25.6753L3.1312 28.7793C3.3362 28.6563 3.6102 28.4783 3.9652 28.2323C5.8112 26.8653 7.3012 26.2503 9.1192 26.2503C10.9652 26.2503 12.4422 26.8793 14.3152 28.2593C15.3682 29.0393 15.4912 29.1073 15.7912 29.1073C16.0922 29.1073 16.2152 29.0393 17.2132 28.3003C19.1142 26.8793 20.6042 26.2503 22.4772 26.2503C24.2952 26.2503 25.7852 26.8653 27.6312 28.2323C27.9872 28.4783 28.2462 28.6563 28.4652 28.7793L30.8032 25.6753C32.4982 23.4613 31.3232 20.9453 28.5202 20.9453H3.0772C0.2602 20.9453 -0.9018 23.4613 0.7802 25.6753ZM2.0102 34.3713H2.1332C6.8362 34.3713 7.1512 31.5133 9.1192 31.5133C11.0752 31.5133 11.5532 34.3713 15.7912 34.3713C20.0432 34.3713 20.5222 31.5133 22.4772 31.5133C24.4322 31.5133 24.7462 34.3713 29.4632 34.3713H29.5732C30.4752 34.3713 31.2002 33.6463 31.2002 32.7583C31.2002 31.8693 30.4752 31.1443 29.5732 31.1443H29.4632C28.3972 31.1443 27.6452 30.7483 26.4422 29.8733C25.5262 29.2033 24.2412 28.2873 22.4772 28.2873C20.6862 28.2873 19.4012 29.2303 18.4852 29.9003C17.5002 30.6253 16.8442 31.1443 15.7912 31.1443C14.7522 31.1443 14.0822 30.6253 13.1122 29.9003C12.1962 29.2303 10.8972 28.2873 9.1192 28.2873C7.3562 28.2873 6.0712 29.2033 5.1552 29.8733C3.9382 30.7483 3.2002 31.1443 2.1332 31.1443H2.0102C1.1212 31.1443 0.3972 31.8693 0.3972 32.7583C0.3972 33.6463 1.1212 34.3713 2.0102 34.3713Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.331983310289306 31.978515625"
          className={className}
        >
          <path
            d="              M5.152 18.5255H6.314C7.066 18.5255 7.626 17.9515 7.626 17.2125V15.5445C9.882 15.6955 13.122 15.7905 15.665 15.7905C18.222 15.7905 21.449 15.6955 23.704 15.5445V17.2125C23.704 17.9515 24.279 18.5255 25.017 18.5255H26.193C26.931 18.5255 27.505 17.9515 27.505 17.2125V11.5255C27.505 9.7615 27.109 8.8455 26.234 7.7245L25.359 6.5765C24.99 4.7445 24.32 2.8165 23.964 2.0645C23.431 0.9295 22.378 0.3145 21.12 0.1365C20.437 0.0405 18.154 -0.0005 15.665 -0.0005C13.177 -0.0005 10.907 0.0545 10.21 0.1365C8.966 0.3005 7.913 0.9295 7.366 2.0645C7.025 2.8165 6.341 4.7445 5.972 6.5765L5.097 7.7245C4.222 8.8455 3.839 9.7615 3.839 11.5255V17.2125C3.839 17.9515 4.413 18.5255 5.152 18.5255ZM7.818 5.7835C8.091 4.5255 8.57 3.1585 8.911 2.5705C9.199 2.0645 9.568 1.7905 10.224 1.7085C11.003 1.5995 12.781 1.5445 15.665 1.5445C18.55 1.5445 20.327 1.5855 21.12 1.7085C21.777 1.7905 22.132 2.0645 22.433 2.5705C22.775 3.1445 23.226 4.5255 23.513 5.7835C23.595 6.1115 23.458 6.2895 23.075 6.2615C21.339 6.1385 19.37 6.0425 15.665 6.0425C11.96 6.0425 10.005 6.1385 8.255 6.2615C7.872 6.2895 7.749 6.1115 7.818 5.7835ZM8.324 13.0155C7.462 13.0155 6.82 12.3725 6.82 11.5115C6.82 10.6645 7.462 10.0075 8.324 10.0075C9.185 10.0075 9.827 10.6645 9.827 11.5115C9.827 12.3725 9.185 13.0155 8.324 13.0155ZM23.021 13.0155C22.159 13.0155 21.517 12.3725 21.517 11.5115C21.517 10.6645 22.159 10.0075 23.021 10.0075C23.868 10.0075 24.511 10.6645 24.511 11.5115C24.511 12.3725 23.868 13.0155 23.021 13.0155ZM13.054 12.7145C12.411 12.7145 11.988 12.2775 11.988 11.6485C11.988 11.0055 12.411 10.5685 13.054 10.5685H18.277C18.919 10.5685 19.357 11.0055 19.357 11.6485C19.357 12.2775 18.919 12.7145 18.277 12.7145ZM0.476 23.3105L4.167 28.2735C4.386 28.1365 4.605 27.9725 4.851 27.7945C6.191 26.8245 7.476 26.0995 9.171 26.0995C10.921 26.0995 12.22 26.8785 13.574 27.8765C14.544 28.6155 14.941 28.8745 15.665 28.8745C16.376 28.8745 16.773 28.6155 17.634 27.9725C19.042 26.8925 20.368 26.0995 22.159 26.0995C23.855 26.0995 25.14 26.8245 26.48 27.7945C26.726 27.9725 26.945 28.1365 27.163 28.2735L30.841 23.3105C31.88 21.9435 31.21 20.3165 29.392 20.3165H1.925C0.12 20.3165 -0.536 21.9565 0.476 23.3105ZM2.267 31.9785H2.335C6.409 31.9785 6.779 29.2035 9.171 29.2035C11.523 29.2035 12.097 31.9785 15.665 31.9785C19.234 31.9785 19.808 29.2035 22.159 29.2035C24.552 29.2035 24.921 31.9785 28.995 31.9785H29.064C29.488 31.9785 29.816 31.6365 29.816 31.2125C29.816 30.8025 29.488 30.4605 29.064 30.4605H28.995C27.45 30.4605 26.575 29.8185 25.55 29.0935C24.661 28.4375 23.609 27.6855 22.159 27.6855C20.656 27.6855 19.589 28.4925 18.7 29.1485C17.757 29.8595 16.964 30.4605 15.665 30.4605C14.366 30.4605 13.574 29.8595 12.63 29.1485C11.741 28.4925 10.675 27.6855 9.171 27.6855C7.722 27.6855 6.669 28.4375 5.781 29.0935C4.755 29.8185 3.866 30.4605 2.335 30.4605H2.267C1.843 30.4605 1.501 30.8025 1.501 31.2125C1.501 31.6365 1.843 31.9785 2.267 31.9785Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.651653110284833 32.67578125"
          className={className}
        >
          <path
            d="              M4.7419 18.7573H5.9319C6.6839 18.7573 7.2579 18.1703 7.2579 17.4313V15.7223C9.4729 15.8593 12.7129 15.9553 15.3249 15.9553C17.9359 15.9553 21.1759 15.8593 23.3769 15.7223V17.4313C23.3769 18.1703 23.9649 18.7573 24.7169 18.7573H25.9069C26.6579 18.7573 27.2459 18.1703 27.2459 17.4313V11.5803C27.2459 9.8433 26.9179 8.8733 25.9889 7.6833L25.1269 6.5763C24.7579 4.7983 24.1019 2.9253 23.7599 2.1873C23.2129 1.0253 22.1469 0.3413 20.7799 0.1503C20.0819 0.0543 17.9499 0.0003 15.3249 0.0003C12.6999 0.0003 10.5669 0.0683 9.8689 0.1503C8.5019 0.3143 7.4359 1.0253 6.8889 2.1873C6.5469 2.9253 5.8909 4.7983 5.5219 6.5763L4.6469 7.6833C3.7309 8.8733 3.4029 9.8433 3.4029 11.5803V17.4313C3.4029 18.1703 3.9909 18.7573 4.7419 18.7573ZM7.7089 5.6733C7.9279 4.6753 8.3789 3.3633 8.6799 2.8303C8.9669 2.3103 9.2949 2.0913 9.8969 2.0093C10.6079 1.9143 12.3029 1.8453 15.3249 1.8453C18.3459 1.8453 20.0409 1.9003 20.7519 2.0093C21.3539 2.0913 21.6819 2.3103 21.9689 2.8303C22.2699 3.3493 22.6939 4.6753 22.9399 5.6733C23.0349 6.0973 22.8579 6.2893 22.4199 6.2613C20.8749 6.1663 18.9479 6.0703 15.3249 6.0703C11.7009 6.0703 9.7739 6.1663 8.2289 6.2613C7.7909 6.2893 7.6139 6.0973 7.7089 5.6733ZM8.0779 13.2073C7.1489 13.2073 6.4379 12.4963 6.4379 11.5663C6.4379 10.6233 7.1489 9.9123 8.0779 9.9123C9.0219 9.9123 9.7329 10.6233 9.7329 11.5663C9.7329 12.4963 9.0219 13.2073 8.0779 13.2073ZM22.5709 13.2073C21.6269 13.2073 20.9159 12.4963 20.9159 11.5663C20.9159 10.6233 21.6269 9.9123 22.5709 9.9123C23.4999 9.9123 24.2109 10.6233 24.2109 11.5663C24.2109 12.4963 23.4999 13.2073 22.5709 13.2073ZM12.6579 12.7973C11.9609 12.7973 11.4689 12.3043 11.4689 11.6073C11.4689 10.9103 11.9609 10.4183 12.6579 10.4183H17.9909C18.6879 10.4183 19.1799 10.9103 19.1799 11.6073C19.1799 12.3043 18.6879 12.7973 17.9909 12.7973ZM0.6409 24.1853L3.4849 27.9723C3.6489 27.8633 3.8399 27.7263 4.0589 27.5763C5.6859 26.3863 7.0529 25.7443 8.7889 25.7443C10.5799 25.7443 11.9479 26.4143 13.6159 27.6443C14.5999 28.3963 14.8319 28.5333 15.3249 28.5333C15.7889 28.5333 16.0349 28.3963 16.8969 27.7543C18.6329 26.4413 20.0279 25.7443 21.8599 25.7443C23.5959 25.7443 24.9629 26.3863 26.5899 27.5763C26.8089 27.7263 26.9999 27.8633 27.1779 27.9723L30.0079 24.1853C31.3619 22.4083 30.4999 20.3843 28.1759 20.3843H2.4729C0.1619 20.3843 -0.7131 22.4223 0.6409 24.1853ZM1.8299 32.6753H1.9119C6.2869 32.6753 6.6289 29.8733 8.7889 29.8733C10.9079 29.8733 11.4829 32.6753 15.3249 32.6753C19.1799 32.6753 19.7409 29.8733 21.8599 29.8733C24.0199 29.8733 24.3619 32.6753 28.7369 32.6753H28.8189C29.4339 32.6753 29.9399 32.1703 29.9399 31.5543C29.9399 30.9393 29.4339 30.4333 28.8189 30.4333H28.7369C27.3559 30.4333 26.5489 29.8733 25.4829 29.1213C24.5799 28.4653 23.4319 27.6443 21.8599 27.6443C20.2459 27.6443 19.0839 28.5063 18.1819 29.1753C17.2389 29.8863 16.5139 30.4333 15.3249 30.4333C14.1489 30.4333 13.4239 29.8863 12.4669 29.1753C11.5779 28.5063 10.4029 27.6443 8.7889 27.6443C7.2169 27.6443 6.0689 28.4653 5.1659 29.1213C4.0999 29.8733 3.2929 30.4333 1.9119 30.4333H1.8299C1.2149 30.4333 0.7229 30.9393 0.7229 31.5543C0.7229 32.1703 1.2149 32.6753 1.8299 32.6753Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.36888878900792 32.142578125"
          className={className}
        >
          <path
            d="              M4.6915 18.5393H5.8675C6.6195 18.5393 7.1935 17.9652 7.1935 17.2263V15.5453C9.4085 15.6953 12.6205 15.7913 15.1915 15.7913C17.7475 15.7913 20.9605 15.6953 23.1895 15.5453V17.2263C23.1895 17.9652 23.7635 18.5393 24.5015 18.5393H25.6775C26.4295 18.5393 27.0035 17.9652 27.0035 17.2263V11.4573C27.0035 9.7753 26.6615 8.8322 25.7455 7.6423L24.8985 6.5493C24.5295 4.7443 23.8595 2.8573 23.5175 2.1193C22.9845 0.9842 21.9455 0.3283 20.6195 0.1502C19.9625 0.0542 17.7615 0.0003 15.1915 0.0003C12.6075 0.0003 10.4195 0.0682 9.7495 0.1502C8.4235 0.3012 7.3845 0.9842 6.8515 2.1193C6.5095 2.8573 5.8395 4.7443 5.4705 6.5493L4.6365 7.6423C3.7065 8.8322 3.3655 9.7753 3.3655 11.4573V17.2263C3.3655 17.9652 3.9395 18.5393 4.6915 18.5393ZM7.4805 5.7153C7.7265 4.6073 8.2045 3.1853 8.5335 2.6112C8.8065 2.1462 9.1075 1.9273 9.6405 1.8592C10.4065 1.7503 12.1015 1.6953 15.1915 1.6953C18.2675 1.6953 19.9765 1.7362 20.7285 1.8592C21.2755 1.9413 21.5625 2.1462 21.8355 2.6112C22.1775 3.1722 22.6285 4.6073 22.8885 5.7153C22.9845 6.0843 22.8205 6.2203 22.4375 6.2072C20.7835 6.0972 18.8005 5.9883 15.1915 5.9883C11.5685 5.9883 9.5995 6.0972 7.9315 6.2072C7.5485 6.2203 7.3985 6.0843 7.4805 5.7153ZM7.9725 13.0843C7.0705 13.0843 6.3725 12.4003 6.3725 11.4843C6.3725 10.5683 7.0705 9.8852 7.9725 9.8852C8.8885 9.8852 9.5725 10.5683 9.5725 11.4843C9.5725 12.4003 8.8885 13.0843 7.9725 13.0843ZM22.3965 13.0843C21.4805 13.0843 20.7965 12.4003 20.7965 11.4843C20.7965 10.5683 21.4805 9.8852 22.3965 9.8852C23.3125 9.8852 23.9955 10.5683 23.9955 11.4843C23.9955 12.4003 23.3125 13.0843 22.3965 13.0843ZM12.5385 12.7013C11.8695 12.7013 11.3905 12.2223 11.3905 11.5392C11.3905 10.8553 11.8695 10.3903 12.5385 10.3903H17.8295C18.5135 10.3903 18.9785 10.8553 18.9785 11.5392C18.9785 12.2223 18.5135 12.7013 17.8295 12.7013ZM0.6035 23.7343L3.5975 27.7133C3.7475 27.6173 3.9115 27.4943 4.0895 27.3713C5.6485 26.2363 6.9885 25.5803 8.6975 25.5803C10.4605 25.5803 11.7865 26.2773 13.4005 27.4533C14.3575 28.1913 14.6305 28.3553 15.1915 28.3553C15.7105 28.3553 15.9845 28.1913 16.8045 27.5903C18.4865 26.3043 19.8535 25.5803 21.6715 25.5803C23.3945 25.5803 24.7205 26.2363 26.2795 27.3713C26.4565 27.4943 26.6205 27.6173 26.7855 27.7133L29.7655 23.7343C31.0235 22.0933 30.2445 20.2073 28.0835 20.2073H2.2855C0.1245 20.2073 -0.6545 22.0933 0.6035 23.7343ZM1.7795 32.1423H1.8475C6.1135 32.1423 6.4685 29.3673 8.6975 29.3673C10.8575 29.3673 11.4585 32.1423 15.1915 32.1423C18.9105 32.1423 19.5115 29.3673 21.6715 29.3673C23.9005 29.3673 24.2555 32.1423 28.5215 32.1423H28.5895C29.1225 32.1423 29.5465 31.7193 29.5465 31.1853C29.5465 30.6523 29.1225 30.2153 28.5895 30.2153H28.5215C27.0445 30.2153 26.2245 29.6133 25.1855 28.8753C24.2965 28.2323 23.1895 27.4393 21.6715 27.4393C20.1135 27.4393 18.9925 28.2873 18.1035 28.9433C17.1605 29.6683 16.4085 30.2153 15.1915 30.2153C13.9605 30.2153 13.2225 29.6683 12.2795 28.9433C11.3905 28.2873 10.2555 27.4393 8.6975 27.4393C7.1795 27.4393 6.0725 28.2323 5.1835 28.8753C4.1445 29.6133 3.3245 30.2153 1.8475 30.2153H1.7795C1.2455 30.2153 0.8225 30.6523 0.8225 31.1853C0.8225 31.7193 1.2455 32.1423 1.7795 32.1423Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.878081734741492 33.0859375"
          className={className}
        >
          <path
            d="              M4.7851 18.9218H5.9751C6.7411 18.9218 7.3281 18.3338 7.3281 17.5818V15.8458C9.5161 15.9958 12.7841 16.0917 15.4361 16.0917C18.0881 16.0917 21.3421 15.9958 23.5431 15.8458V17.5818C23.5431 18.3338 24.1311 18.9218 24.8831 18.9218H26.0861C26.8381 18.9218 27.4261 18.3338 27.4261 17.5818V11.6618C27.4261 9.8988 27.1251 8.9138 26.1961 7.7108L25.3071 6.6038C24.9381 4.8397 24.2821 2.9808 23.9401 2.2557C23.3791 1.0527 22.2991 0.3558 20.9051 0.1638C20.1661 0.0688 18.0881 -0.0003 15.4361 -0.0003C12.7841 -0.0003 10.6921 0.0688 9.9531 0.1638C8.5731 0.3278 7.4791 1.0527 6.9321 2.2557C6.5901 2.9808 5.9341 4.8397 5.5651 6.6038L4.6761 7.7108C3.7461 8.9138 3.4321 9.8988 3.4321 11.6618V17.5818C3.4321 18.3338 4.0201 18.9218 4.7851 18.9218ZM7.8891 5.6468C8.1081 4.7168 8.5181 3.4868 8.7911 2.9937C9.0921 2.4338 9.4341 2.2147 10.0901 2.1328C10.7601 2.0368 12.4551 1.9827 15.4361 1.9827C18.4161 1.9827 20.1121 2.0237 20.7821 2.1328C21.4241 2.2147 21.7801 2.4338 22.0801 2.9937C22.3541 3.4868 22.7501 4.7168 22.9691 5.6468C23.0781 6.1118 22.8871 6.3298 22.4091 6.3167C20.9591 6.2347 19.0731 6.1388 15.4361 6.1388C11.7991 6.1388 9.9121 6.2347 8.4631 6.3167C7.9711 6.3298 7.7931 6.1118 7.8891 5.6468ZM8.1761 13.3028C7.2191 13.3028 6.4941 12.5778 6.4941 11.6207C6.4941 10.6638 7.2191 9.9398 8.1761 9.9398C9.1191 9.9398 9.8581 10.6638 9.8581 11.6207C9.8581 12.5778 9.1191 13.3028 8.1761 13.3028ZM22.6961 13.3028C21.7391 13.3028 21.0141 12.5778 21.0141 11.6207C21.0141 10.6638 21.7391 9.9398 22.6961 9.9398C23.6531 9.9398 24.3771 10.6638 24.3771 11.6207C24.3771 12.5778 23.6531 13.3028 22.6961 13.3028ZM12.7431 12.8788C12.0321 12.8788 11.5261 12.3728 11.5261 11.6618C11.5261 10.9508 12.0321 10.4458 12.7431 10.4458H18.1161C18.8401 10.4458 19.3321 10.9508 19.3321 11.6618C19.3321 12.3728 18.8401 12.8788 18.1161 12.8788ZM0.6701 24.5408L3.3911 28.1638C3.5691 28.0548 3.7871 27.9178 4.0341 27.7268C5.7151 26.4958 7.1101 25.8668 8.8731 25.8668C10.6641 25.8668 12.0591 26.5238 13.7821 27.7948C14.7801 28.5468 14.9981 28.6698 15.4361 28.6698C15.8601 28.6698 16.0781 28.5468 16.9671 27.8908C18.7441 26.5508 20.1661 25.8668 22.0121 25.8668C23.7621 25.8668 25.1571 26.4958 26.8381 27.7268C27.0981 27.9178 27.3031 28.0548 27.4811 28.1638L30.2021 24.5408C31.6371 22.6677 30.6941 20.5218 28.2601 20.5218H2.6121C0.1781 20.5218 -0.7519 22.6677 0.6701 24.5408ZM1.8731 33.0858H1.9691C6.4121 33.0858 6.7541 30.2698 8.8731 30.2698C10.9521 30.2698 11.4981 33.0858 15.4361 33.0858C19.3731 33.0858 19.9341 30.2698 22.0121 30.2698C24.1181 30.2698 24.4591 33.0858 28.9031 33.0858H28.9981C29.6821 33.0858 30.2291 32.5258 30.2291 31.8418C30.2291 31.1578 29.6821 30.6118 28.9981 30.6118H28.9031C27.6041 30.6118 26.8111 30.0918 25.7031 29.2988C24.8151 28.6428 23.6251 27.7948 22.0121 27.7948C20.3581 27.7948 19.1551 28.6838 18.2521 29.3538C17.2951 30.0648 16.5841 30.6118 15.4361 30.6118C14.2871 30.6118 13.5771 30.0648 12.6191 29.3538C11.7171 28.6838 10.5281 27.7948 8.8731 27.7948C7.2461 27.7948 6.0711 28.6428 5.1681 29.2988C4.0611 30.0918 3.2681 30.6118 1.9691 30.6118H1.8731C1.1901 30.6118 0.6431 31.1578 0.6431 31.8418C0.6431 32.5258 1.1901 33.0858 1.8731 33.0858Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.61115402949531 31.759765625"
          className={className}
        >
          <path
            d="              M5.7694 18.5252H6.9314C7.6564 18.5252 8.2304 17.9652 8.2304 17.2262V15.5722C10.5274 15.7222 13.7944 15.8182 16.3104 15.8182C18.8394 15.8182 22.1074 15.7222 24.4044 15.5722V17.2262C24.4044 17.9652 24.9644 18.5252 25.7024 18.5252H26.8654C27.5894 18.5252 28.1634 17.9652 28.1634 17.2262V11.6352C28.1634 9.7752 27.7124 8.8872 26.9064 7.8472L25.9904 6.6442C25.6074 4.7712 24.9234 2.7892 24.5544 2.0232C24.0074 0.8612 22.9544 0.3012 21.7924 0.1502C21.0684 0.0552 18.6894 0.0002 16.3104 0.0002C13.9454 0.0002 11.5524 0.0552 10.8414 0.1502C9.6794 0.3012 8.6264 0.8612 8.0664 2.0232C7.7104 2.7892 7.0134 4.7712 6.6444 6.6442L5.7284 7.8472C4.9214 8.8872 4.4704 9.7752 4.4704 11.6352V17.2262C4.4704 17.9652 5.0314 18.5252 5.7694 18.5252ZM8.2844 5.8792C8.5994 4.4302 9.0644 3.1312 9.4064 2.5562C9.7344 1.9962 10.1854 1.6272 10.9924 1.5172C11.8124 1.4082 13.6854 1.3672 16.3104 1.3672C18.9494 1.3672 20.8084 1.4082 21.6424 1.5172C22.4494 1.6272 22.9004 1.9962 23.2284 2.5562C23.5564 3.1312 24.0214 4.4302 24.3494 5.8792C24.4174 6.1522 24.3224 6.3712 23.9394 6.3442C22.0934 6.2212 20.1384 6.1382 16.3104 6.1382C12.4954 6.1382 10.5404 6.2212 8.6954 6.3442C8.3124 6.3712 8.2164 6.1522 8.2844 5.8792ZM8.7904 12.9472C7.9974 12.9472 7.4234 12.3592 7.4234 11.5802C7.4234 10.7872 7.9974 10.2132 8.7904 10.2132C9.5704 10.2132 10.1584 10.7872 10.1584 11.5802C10.1584 12.3592 9.5704 12.9472 8.7904 12.9472ZM23.8434 12.9472C23.0504 12.9472 22.4764 12.3592 22.4764 11.5802C22.4764 10.7872 23.0504 10.2132 23.8434 10.2132C24.6224 10.2132 25.2104 10.7872 25.2104 11.5802C25.2104 12.3592 24.6224 12.9472 23.8434 12.9472ZM13.7404 12.7692C13.1524 12.7692 12.7694 12.3872 12.7694 11.7992C12.7694 11.2242 13.1524 10.8282 13.7404 10.8282H18.8944C19.4684 10.8282 19.8654 11.2242 19.8654 11.7992C19.8654 12.3872 19.4684 12.7692 18.8944 12.7692ZM0.3274 22.7632L4.9354 29.0252C5.2364 28.8342 5.5234 28.6152 5.8654 28.3832C6.9044 27.6312 8.1484 26.8102 9.8164 26.8102C11.5384 26.8102 12.7964 27.6852 13.8354 28.4512C14.7794 29.1762 15.3394 29.5862 16.3104 29.5862C17.2674 29.5862 17.8274 29.1762 18.7434 28.4782C19.7964 27.6852 21.0684 26.8102 22.7904 26.8102C24.4724 26.8102 25.7164 27.6312 26.7424 28.3832C27.0834 28.6152 27.3844 28.8342 27.6714 29.0252L32.2654 22.7632C33.0174 21.7792 32.4974 20.4672 31.1444 20.4672H1.4624C0.1224 20.4672 -0.3966 21.8062 0.3274 22.7632ZM2.8984 31.7602H2.9664C6.8084 31.7602 7.1774 28.9842 9.8164 28.9842C12.3864 28.9842 12.9474 31.7602 16.3104 31.7602C19.6594 31.7602 20.2204 28.9842 22.7904 28.9842C25.4294 28.9842 25.7984 31.7602 29.6404 31.7602H29.7084C29.9684 31.7602 30.1874 31.5412 30.1874 31.2812C30.1874 31.0212 29.9684 30.8032 29.7084 30.8032H29.6404C27.9994 30.8032 27.0564 30.0922 26.0314 29.3812C25.1424 28.7242 24.1584 28.0272 22.7904 28.0272C21.3964 28.0272 20.3984 28.7652 19.5094 29.4352C18.5664 30.1462 17.6914 30.8032 16.3104 30.8032C14.9154 30.8032 14.0404 30.1462 13.0974 29.4352C12.2084 28.7652 11.2104 28.0272 9.8164 28.0272C8.4494 28.0272 7.4644 28.7242 6.5764 29.3812C5.5504 30.0922 4.6074 30.8032 2.9664 30.8032H2.8984C2.6384 30.8032 2.4194 31.0212 2.4194 31.2812C2.4194 31.5412 2.6384 31.7602 2.8984 31.7602Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.26577449124536 31.650390625"
          className={className}
        >
          <path
            d="              M6.0841 18.5255H7.2461C7.9711 18.5255 8.5321 17.9645 8.5321 17.2405V15.5855C10.8421 15.7365 14.1371 15.8325 16.6391 15.8325C19.1551 15.8325 22.4501 15.7365 24.7601 15.5855V17.2405C24.7601 17.9645 25.3211 18.5255 26.0451 18.5255H27.2071C27.9321 18.5255 28.5061 17.9645 28.5061 17.2405V11.6895C28.5061 9.7755 28.0141 8.9145 27.2481 7.9025L26.3051 6.6715C25.9221 4.7715 25.2251 2.7615 24.8561 1.9965C24.3091 0.8205 23.2431 0.3005 22.1351 0.1505C21.3971 0.0545 18.9631 0.0005 16.6391 0.0005C14.3281 0.0005 11.8951 0.0545 11.1571 0.1505C10.0491 0.3005 8.9831 0.8205 8.4361 1.9965C8.0671 2.7615 7.3691 4.7715 6.9871 6.6715L6.0431 7.9025C5.2781 8.9145 4.7851 9.7755 4.7851 11.6895V17.2405C4.7851 17.9645 5.3601 18.5255 6.0841 18.5255ZM8.5181 5.9335C8.8461 4.3755 9.3251 3.1175 9.6661 2.5425C9.9941 1.9555 10.5001 1.5315 11.3891 1.4215C12.2371 1.3125 14.1511 1.2855 16.6391 1.2855C19.1411 1.2855 21.0551 1.3125 21.9031 1.4215C22.7911 1.5315 23.2971 1.9555 23.6251 2.5425C23.9671 3.1175 24.4321 4.3755 24.7741 5.9335C24.8281 6.1795 24.7461 6.4255 24.3771 6.3985C22.4631 6.2615 20.5351 6.1935 16.6391 6.1935C12.7561 6.1935 10.8151 6.2615 8.9141 6.3985C8.5451 6.4255 8.4631 6.1795 8.5181 5.9335ZM9.0241 12.9065C8.2721 12.9065 7.7251 12.3595 7.7251 11.6075C7.7251 10.8555 8.2721 10.3085 9.0241 10.3085C9.7761 10.3085 10.3231 10.8555 10.3231 11.6075C10.3231 12.3595 9.7761 12.9065 9.0241 12.9065ZM24.2681 12.9065C23.5161 12.9065 22.9691 12.3595 22.9691 11.6075C22.9691 10.8555 23.5161 10.3085 24.2681 10.3085C25.0201 10.3085 25.5671 10.8555 25.5671 11.6075C25.5671 12.3595 25.0201 12.9065 24.2681 12.9065ZM14.0821 12.7965C13.5351 12.7965 13.1801 12.4275 13.1801 11.8805C13.1801 11.3335 13.5351 10.9645 14.0821 10.9645H19.2091C19.7561 10.9645 20.1121 11.3335 20.1121 11.8805C20.1121 12.4275 19.7561 12.7965 19.2091 12.7965ZM0.2461 22.4905L5.3321 29.4085C5.6601 29.1895 6.0021 28.9435 6.3851 28.6835C7.2601 28.0415 8.4771 27.1665 10.1451 27.1665C11.8541 27.1665 13.0841 28.0955 13.9591 28.7515C14.9031 29.4625 15.5451 29.9415 16.6391 29.9415C17.7191 29.9415 18.3621 29.4625 19.3051 28.7515C20.1801 28.0955 21.4101 27.1665 23.1191 27.1665C24.7871 27.1665 26.0041 28.0415 26.8791 28.6835C27.2621 28.9435 27.6041 29.1895 27.9321 29.4085L33.0041 22.4905C33.5921 21.6835 33.1551 20.5485 32.0341 20.5485H1.2311C0.1101 20.5485 -0.3139 21.7245 0.2461 22.4905ZM3.2271 31.6505H3.2951C7.0001 31.6505 7.3971 28.8755 10.1451 28.8755C12.8381 28.8755 13.3711 31.6505 16.6391 31.6505C19.8931 31.6505 20.4261 28.8755 23.1191 28.8755C25.8681 28.8755 26.2641 31.6505 29.9691 31.6505H30.0371C30.2151 31.6505 30.3661 31.5005 30.3661 31.3085C30.3661 31.1305 30.2151 30.9805 30.0371 30.9805H29.9691C28.2871 30.9805 27.3031 30.2425 26.2781 29.5315C25.3891 28.8755 24.4461 28.2055 23.1191 28.2055C21.7661 28.2055 20.8091 28.9165 19.9201 29.5725C18.9771 30.2965 18.0611 30.9805 16.6391 30.9805C15.2031 30.9805 14.2871 30.2965 13.3441 29.5725C12.4551 28.9165 11.4981 28.2055 10.1451 28.2055C8.8191 28.2055 7.8751 28.8755 6.9871 29.5315C5.9611 30.2425 4.9771 30.9805 3.2951 30.9805H3.2271C3.0491 30.9805 2.8991 31.1305 2.8991 31.3085C2.8991 31.5005 3.0491 31.6505 3.2271 31.6505Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}