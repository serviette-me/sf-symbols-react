import { IconProps } from "../../types"

export default function HandWaveIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.67272702514957 31.904010658627797"
          className={className}
        >
          <path
            d="              M27.7818 27.968C32.0738 23.662 32.8128 18.439 30.0098 12.492L26.7698 5.628C26.4688 4.986 26.0998 4.466 25.6758 4.056C24.2538 2.62 22.0668 2.497 20.5348 4.029C19.7698 4.781 19.3728 5.956 19.7288 6.995L19.7828 7.173C19.7968 7.214 19.7968 7.242 19.7828 7.269C19.7418 7.31 19.6878 7.283 19.6738 7.269L13.5898 1.171C11.9768 -0.428 9.6938 -0.387 8.0258 1.281C7.7658 1.527 7.5738 1.814 7.3968 2.128C6.0298 1.636 4.6208 2.019 3.4728 3.154C2.3928 4.22 2.0368 5.669 2.4748 7.023C2.2008 7.16 1.9548 7.337 1.7368 7.556C0.1778 9.128 0.1368 11.302 1.6548 12.82L1.7638 12.929C1.5448 13.066 1.3398 13.189 1.1618 13.38C-0.3962 14.939 -0.3832 17.249 1.1758 18.794L10.2818 27.913C15.5998 33.218 22.4908 33.232 27.7818 27.968ZM24.7598 25.111C21.1098 28.761 16.6248 28.734 12.8238 24.947L4.2928 16.402C4.1288 16.251 4.1288 15.992 4.2928 15.828C4.4568 15.663 4.7028 15.663 4.8808 15.828L10.0218 20.968C10.6778 21.624 11.7308 21.611 12.3868 20.954C13.0428 20.298 13.0428 19.259 12.3868 18.603L4.5798 10.796C4.4158 10.646 4.4158 10.386 4.5798 10.236C4.7438 10.058 4.9908 10.058 5.1678 10.236L12.4138 17.482C13.0708 18.138 14.1368 18.124 14.7798 17.468C15.4218 16.812 15.4358 15.759 14.7928 15.117L6.1938 6.531C6.0298 6.353 6.0298 6.12 6.1938 5.943C6.3578 5.792 6.6038 5.792 6.7678 5.943L14.7518 13.927C15.4078 14.583 16.4608 14.556 17.1168 13.913C17.7738 13.257 17.7738 12.204 17.1168 11.548L10.4728 4.904C10.3088 4.753 10.3088 4.521 10.4588 4.343C10.6228 4.179 10.8828 4.165 11.0468 4.343L21.1918 14.46C22.0528 15.335 23.1878 15.144 23.8578 14.447C24.4048 13.886 24.6778 13.011 24.3358 12.136L22.5728 7.556C22.4628 7.255 22.6138 7.037 22.7908 6.954C23.0098 6.886 23.2418 6.941 23.3518 7.187L26.4688 14.173C28.4508 18.658 27.9998 21.87 24.7598 25.111Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.978654335907443 29.294461957305206"
          className={className}
        >
          <path
            d="              M25.5087 25.8131C29.3637 21.9711 30.0067 17.2401 27.4367 11.7991L24.2787 5.1271C24.0187 4.5941 23.7037 4.1431 23.3487 3.7871C22.1317 2.5571 20.2857 2.5291 19.0287 3.7871C18.3177 4.4981 18.0167 5.5921 18.4127 6.6451L18.8917 7.8341C18.9187 7.8751 18.9187 7.9161 18.8777 7.9431C18.8367 7.9841 18.7817 7.9711 18.7547 7.9431L11.8227 1.0121C10.4557 -0.3549 8.6107 -0.3279 7.2297 1.0391C6.9147 1.3671 6.6957 1.7641 6.6007 2.1741C5.3697 1.5041 4.0297 1.6951 2.9777 2.7481C1.9797 3.7601 1.7747 5.1271 2.4037 6.3441C2.0207 6.4121 1.6647 6.6041 1.3777 6.9041C0.0927 8.1761 0.0927 9.9531 1.3917 11.2521L1.9797 11.8401C1.6107 11.8951 1.2277 12.0861 0.9407 12.3871C-0.3453 13.6721 -0.3043 15.5451 1.0087 16.8571L9.7177 25.5661C14.6397 30.4881 20.8327 30.5021 25.5087 25.8131ZM23.3077 23.7481C19.7797 27.2751 15.3917 27.2071 11.5497 23.3651L3.2787 15.0941C2.9907 14.8071 2.9777 14.4101 3.2647 14.1231C3.5377 13.8501 3.9477 13.8361 4.2487 14.1231L9.2797 19.1681C9.7857 19.6741 10.5787 19.6461 11.0707 19.1541C11.5637 18.6621 11.5907 17.8831 11.0847 17.3771L3.4837 9.7751C3.1957 9.4881 3.1827 9.0921 3.4697 8.8181C3.7427 8.5311 4.1537 8.5311 4.4537 8.8181L11.5227 15.8871C12.0287 16.3931 12.8207 16.3651 13.3137 15.8731C13.7917 15.3811 13.8197 14.6021 13.3267 14.0961L4.9737 5.7561C4.6997 5.4551 4.6867 5.0591 4.9597 4.7711C5.2467 4.4981 5.6567 4.4981 5.9447 4.7851L13.9837 12.8241C14.4757 13.3161 15.2687 13.3031 15.7607 12.8241C16.2527 12.3181 16.2797 11.5251 15.7747 11.0201L9.0067 4.2521C8.7197 3.9651 8.7197 3.5681 8.9927 3.2811C9.2667 3.0081 9.6767 3.0081 9.9637 3.2951L19.7937 13.1111C20.4777 13.7951 21.3247 13.6991 21.8587 13.1391C22.2957 12.6871 22.5147 12.0311 22.2137 11.2381L20.4637 6.6991C20.2997 6.2481 20.4777 5.8931 20.8057 5.7421C21.1747 5.5921 21.5167 5.7421 21.7217 6.1931L24.8657 13.0291C26.9167 17.5141 26.2747 20.7811 23.3077 23.7481Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.40280192485295 30.671676184282084"
          className={className}
        >
          <path
            d="              M26.7132 26.953C30.7872 22.851 31.4982 17.861 28.7912 12.16L25.5922 5.392C25.3192 4.804 24.9772 4.312 24.5802 3.929C23.2542 2.589 21.2172 2.507 19.8222 3.916C19.0842 4.654 18.7292 5.775 19.1122 6.828L19.3582 7.484C19.3852 7.525 19.3852 7.552 19.3582 7.593C19.3172 7.634 19.2622 7.607 19.2352 7.58L12.7542 1.099C11.2502 -0.391 9.1722 -0.364 7.6552 1.168C7.3672 1.455 7.1622 1.783 7.0262 2.152C5.7132 1.578 4.3462 1.865 3.2392 2.959C2.1992 3.998 1.9122 5.406 2.4322 6.691C2.1172 6.814 1.8172 6.992 1.5712 7.251C0.1352 8.673 0.1212 10.669 1.5302 12.078L1.8712 12.419C1.5712 12.515 1.2832 12.666 1.0512 12.912C-0.3708 14.334 -0.3438 16.439 1.0922 17.888L10.0202 26.802C15.1472 31.929 21.7092 31.943 26.7132 26.953ZM24.0742 24.464C20.4792 28.06 16.0492 28.019 12.2212 24.191L3.8132 15.783C3.5942 15.564 3.5802 15.25 3.8132 15.017C4.0182 14.798 4.3462 14.798 4.5782 15.017L9.6642 20.117C10.2522 20.705 11.1822 20.677 11.7562 20.103C12.3442 19.529 12.3582 18.599 11.7702 18.025L4.0722 10.314C3.8402 10.095 3.8262 9.781 4.0592 9.562C4.2782 9.33 4.6062 9.33 4.8242 9.562L12.0022 16.726C12.5762 17.314 13.5202 17.287 14.0942 16.712C14.6552 16.138 14.6682 15.209 14.0942 14.634L5.6172 6.158C5.3992 5.925 5.3992 5.611 5.6172 5.392C5.8362 5.173 6.1512 5.187 6.3832 5.392L14.3812 13.404C14.9692 13.978 15.8992 13.964 16.4732 13.404C17.0612 12.816 17.0742 11.886 16.4872 11.298L9.7872 4.599C9.5552 4.38 9.5552 4.066 9.7742 3.847C9.9792 3.628 10.3212 3.615 10.5392 3.847L20.5332 13.828C21.3132 14.607 22.2972 14.457 22.9122 13.828C23.4052 13.322 23.6642 12.543 23.3362 11.709L21.5722 7.156C21.4362 6.787 21.6142 6.486 21.8602 6.376C22.1472 6.267 22.4202 6.363 22.5842 6.718L25.7152 13.636C27.7252 18.121 27.1782 21.361 24.0742 24.464Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.504563518028895 25.897156520179113"
          className={className}
        >
          <path
            d="              M22.567 22.9864C25.835 19.7324 26.382 15.6444 24.18 11.0504L20.995 4.3654C20.804 3.9684 20.571 3.6264 20.298 3.3674C19.354 2.4234 17.987 2.4514 17.057 3.3804C16.429 4.0094 16.237 4.9664 16.675 6.0334L17.891 8.9044C17.932 8.9724 17.919 9.0274 17.878 9.0544C17.837 9.1094 17.768 9.0954 17.727 9.0404L9.497 0.8104C8.417 -0.2556 7.091 -0.2556 6.12 0.7284C5.723 1.1244 5.491 1.6304 5.505 2.1634C4.452 1.2884 3.235 1.2614 2.292 2.1914C1.389 3.1074 1.403 4.3924 2.223 5.4174C1.704 5.4044 1.225 5.6224 0.856 5.9924C-0.073 6.9214 -0.06 8.2064 0.979 9.2454L2.155 10.4354C1.608 10.3944 1.075 10.6404 0.665 11.0504C-0.265 11.9804 -0.224 13.3204 0.815 14.3594L9.018 22.5624C13.489 27.0334 18.725 26.8414 22.567 22.9864ZM21.501 21.9744C18.165 25.3104 13.872 25.3924 9.921 21.4544L1.923 13.4434C1.43 12.9514 1.376 12.3224 1.841 11.8574C2.305 11.3924 2.962 11.4064 3.454 11.8984L8.307 16.7654C8.636 17.0794 9.059 17.0384 9.305 16.7924C9.565 16.5194 9.606 16.1094 9.292 15.7814L1.977 8.4664C1.485 7.9744 1.43 7.3594 1.895 6.8944C2.36 6.4294 3.016 6.4434 3.509 6.9354L10.331 13.7444C10.659 14.0724 11.069 14.0314 11.329 13.7854C11.589 13.5114 11.63 13.1014 11.315 12.7734L3.345 4.8024C2.852 4.3104 2.811 3.6264 3.276 3.1624C3.714 2.7244 4.384 2.7794 4.876 3.2714L12.847 11.2424C13.134 11.5294 13.557 11.5424 13.845 11.2694C14.118 10.9824 14.118 10.5444 13.831 10.2574L7.009 3.4354C6.516 2.9434 6.503 2.2874 6.968 1.8224C7.419 1.3574 8.048 1.4124 8.54 1.9044L17.96 11.3244C18.397 11.7474 18.917 11.7344 19.286 11.3654C19.6 11.0504 19.723 10.6404 19.477 10.0384L17.727 5.6364C17.454 4.9394 17.659 4.3654 18.206 4.1054C18.794 3.8314 19.341 4.1194 19.669 4.8294L22.909 11.6524C24.905 15.8354 24.208 19.2674 21.501 21.9744Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.259405928725986 27.620436041260024"
          className={className}
        >
          <path
            d="              M24.0734 24.4399C27.6284 20.8719 28.2164 16.4699 25.7964 11.3699L22.6794 4.8069C22.4604 4.3289 22.1734 3.9319 21.8594 3.6179C20.7654 2.5239 19.1524 2.5519 18.0584 3.6319C17.3744 4.3149 17.1424 5.3409 17.5664 6.4209L18.3184 8.2389C18.3454 8.2939 18.3454 8.3479 18.3184 8.3759C18.2634 8.4309 18.2084 8.4169 18.1674 8.3759L10.7024 0.9109C9.4864 -0.3061 7.9134 -0.2921 6.7384 0.8839C6.3684 1.2529 6.1504 1.7179 6.0954 2.1959C4.9334 1.4029 3.6614 1.4989 2.6634 2.4969C1.7064 3.4539 1.6114 4.7659 2.3634 5.9009C1.9114 5.9289 1.4884 6.1339 1.1464 6.4749C0.0524 7.5689 0.0664 9.0869 1.2144 10.2349L2.1164 11.1379C1.6524 11.1509 1.1734 11.3839 0.7904 11.7529C-0.3036 12.8599 -0.2616 14.4459 0.9134 15.6219L9.3634 24.0709C14.0254 28.7329 19.7674 28.7469 24.0734 24.4399ZM22.3924 22.8679C18.9334 26.3269 14.6134 26.2309 10.7304 22.3619L2.6224 14.2549C2.2534 13.8859 2.2394 13.3929 2.5954 13.0379C2.9504 12.6819 3.4704 12.6689 3.8394 13.0379L8.8164 18.0149C9.2264 18.4249 9.8554 18.3839 10.2244 18.0149C10.6074 17.6179 10.6614 16.9889 10.2514 16.5789L2.7864 9.1279C2.4174 8.7589 2.3904 8.2529 2.7594 7.8969C3.1144 7.5419 3.6204 7.5419 3.9894 7.9109L10.9484 14.8699C11.3594 15.2799 11.9884 15.2389 12.3704 14.8559C12.7534 14.4729 12.7944 13.8449 12.3844 13.4339L4.2084 5.2589C3.8394 4.8899 3.8254 4.3699 4.1814 4.0149C4.5364 3.6729 5.0424 3.6859 5.4114 4.0419L13.4914 12.1219C13.8884 12.5179 14.5174 12.4909 14.9004 12.1079C15.2964 11.7119 15.3234 11.0829 14.9274 10.6859L8.0774 3.8369C7.7084 3.4679 7.6954 2.9619 8.0504 2.6059C8.4054 2.2509 8.9114 2.2509 9.2804 2.6199L18.9054 12.2589C19.4664 12.8059 20.1224 12.7649 20.5874 12.3129C20.9564 11.9309 21.1344 11.3969 20.8474 10.6729L19.1244 6.1609C18.9194 5.5999 19.1244 5.1629 19.5344 4.9719C19.9994 4.7529 20.4234 4.9719 20.6834 5.5459L23.8414 12.2999C25.9464 16.7839 25.1814 20.0789 22.3924 22.8679Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.291688063005004 26.6760389593339"
          className={className}
        >
          <path
            d="              M23.2554 23.6632C26.6594 20.2582 27.2064 16.0342 24.8684 11.1122L21.7924 4.6312C21.5734 4.1802 21.3144 3.8112 21.0274 3.5242C20.0014 2.4982 18.5114 2.5532 17.5274 3.5382C16.8574 4.2072 16.6524 5.2052 17.0894 6.2862L18.0054 8.4732C18.0324 8.5282 18.0324 8.5822 17.9914 8.6232C17.9374 8.6642 17.8824 8.6512 17.8274 8.6102L10.0754 0.8582C8.9544 -0.2768 7.5324 -0.2768 6.4524 0.8032C6.0564 1.1862 5.8374 1.6922 5.8234 2.2112C4.7024 1.3502 3.4584 1.3772 2.5014 2.3342C1.5584 3.2782 1.5314 4.5632 2.3374 5.6572C1.8454 5.6572 1.3804 5.8752 1.0254 6.2312C0.0274 7.2292 0.0544 8.5962 1.1204 9.6632L2.2004 10.7432C1.6674 10.7292 1.1344 10.9752 0.7244 11.3852C-0.2876 12.3972 -0.2326 13.8322 0.8474 14.9132L9.1594 23.2252C13.6854 27.7502 19.1674 27.7502 23.2554 23.6632ZM21.8744 22.3772C18.4564 25.7952 14.1634 25.6862 10.2814 21.7892L2.2694 13.7782C1.8454 13.3682 1.8314 12.8072 2.2284 12.4112C2.6244 12.0142 3.1984 12.0142 3.6094 12.4242L8.5584 17.3602C8.9134 17.7152 9.4334 17.6742 9.7474 17.3602C10.0894 17.0322 10.1304 16.4982 9.7754 16.1432L2.3924 8.7462C1.9824 8.3362 1.9544 7.7892 2.3514 7.3932C2.7474 6.9832 3.3354 6.9832 3.7454 7.3932L10.6364 14.2972C10.9914 14.6532 11.5254 14.5982 11.8394 14.2842C12.1674 13.9552 12.2224 13.4222 11.8664 13.0672L3.7734 4.9732C3.3634 4.5632 3.3354 3.9892 3.7454 3.5922C4.1284 3.1962 4.7164 3.2092 5.1264 3.6202L13.2204 11.7132C13.5484 12.0552 14.0814 12.0412 14.4094 11.7132C14.7514 11.3712 14.7794 10.8252 14.4504 10.4962L7.5464 3.5922C7.1364 3.1822 7.1224 2.6212 7.5194 2.2112C7.9294 1.8152 8.4904 1.8292 8.9004 2.2392L18.4154 11.7542C18.8944 12.2462 19.4684 12.2332 19.8654 11.8362C20.2064 11.4952 20.3574 11.0432 20.0834 10.3322L18.3744 5.8482C18.1424 5.2332 18.3614 4.7412 18.8254 4.5222C19.3454 4.2892 19.8104 4.5362 20.1114 5.1782L23.2824 11.8772C25.4024 16.3622 24.5684 19.6702 21.8744 22.3772Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.00666672668699 28.344605036787268"
          className={className}
        >
          <path
            d="              M24.6906 25.0352C28.3816 21.3432 28.9966 16.8042 26.5086 11.5542L23.3776 4.9512C23.1316 4.4452 22.8446 4.0212 22.5026 3.6932C21.3546 2.5442 19.6456 2.5442 18.4836 3.6932C17.7856 4.4042 17.5126 5.4432 17.9366 6.5232L18.5656 8.0682C18.5926 8.1232 18.5926 8.1642 18.5656 8.1912C18.5106 8.2462 18.4556 8.2322 18.4146 8.1912L11.1966 0.9592C9.9106 -0.3268 8.2156 -0.3128 6.9446 0.9592C6.6026 1.3002 6.3836 1.7382 6.3156 2.1892C5.1256 1.4512 3.8266 1.5872 2.8016 2.5992C1.8306 3.5842 1.6806 4.9232 2.3776 6.0852C1.9676 6.1402 1.5576 6.3452 1.2426 6.6602C0.0676 7.8352 0.0806 9.4622 1.2976 10.6792L2.0636 11.4452C1.6256 11.4722 1.2016 11.6912 0.8606 12.0192C-0.3154 13.2092 -0.2884 14.9182 0.9556 16.1482L9.5146 24.7202C14.2996 29.4922 20.2196 29.5052 24.6906 25.0352ZM22.7896 23.2442C19.3036 26.7442 14.9556 26.6622 11.0866 22.7932L2.9106 14.6172C2.5696 14.2892 2.5556 13.8242 2.8836 13.4962C3.2116 13.1812 3.6766 13.1812 4.0186 13.5092L9.0226 18.5132C9.4736 18.9642 10.1706 18.9232 10.5946 18.5002C11.0186 18.0762 11.0596 17.3782 10.6086 16.9272L3.0886 9.4082C2.7466 9.0802 2.7336 8.6152 3.0616 8.3002C3.3896 7.9722 3.8546 7.9722 4.1966 8.3002L11.1966 15.3142C11.6476 15.7652 12.3446 15.7242 12.7686 15.3002C13.2056 14.8632 13.2466 14.1662 12.7956 13.7142L4.5376 5.4702C4.2096 5.1422 4.1966 4.6642 4.5246 4.3352C4.8386 4.0212 5.3036 4.0352 5.6456 4.3632L13.6976 12.4292C14.1356 12.8672 14.8466 12.8392 15.2706 12.4162C15.7076 11.9782 15.7356 11.2672 15.2976 10.8302L8.4756 4.0212C8.1476 3.6792 8.1336 3.2282 8.4616 2.9002C8.7766 2.5722 9.2406 2.5852 9.5826 2.9142L19.2896 12.6212C19.9056 13.2362 20.6436 13.1682 21.1356 12.6752C21.5456 12.2522 21.7236 11.6772 21.4366 10.9122L19.6996 6.4002C19.5086 5.8802 19.7136 5.4702 20.0826 5.3062C20.5066 5.1152 20.9036 5.2932 21.1356 5.8262L24.2936 12.6212C26.3716 17.0912 25.6606 20.3732 22.7896 23.2442Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.451928947152943 24.869965627226822"
          className={className}
        >
          <path
            d="              M21.6608 22.0891C24.7368 19.0131 25.2708 15.1301 23.2608 10.9601L19.9518 4.0151C19.7878 3.6731 19.5688 3.3721 19.3368 3.1401C18.5028 2.3061 17.2728 2.3201 16.4248 3.1811C15.8508 3.7421 15.6728 4.6581 16.1098 5.6691L17.7368 9.4561C17.7778 9.5381 17.7648 9.6071 17.7368 9.6341C17.6828 9.6891 17.6138 9.6751 17.5728 9.6201L8.7138 0.7611C7.7158 -0.2369 6.5128 -0.2229 5.6648 0.6241C5.2688 1.0211 5.0358 1.5401 5.0908 2.1011C4.1198 1.2121 2.9168 1.1031 2.0278 1.9921C1.1398 2.8801 1.2218 4.1791 2.0688 5.1091C1.5088 5.0681 1.0028 5.2871 0.6198 5.6691C-0.2142 6.5031 -0.2142 7.6931 0.7708 8.6771L2.0968 10.0031C1.5228 9.9621 1.0028 10.2081 0.6068 10.6051C-0.2272 11.4391 -0.2272 12.6421 0.7708 13.6261L8.8228 21.6931C13.2388 26.0951 18.1198 25.6301 21.6608 22.0891ZM20.9908 21.4471C17.7778 24.6601 13.4578 25.0011 9.4518 20.9951L1.4538 12.9971C0.8528 12.3961 0.7568 11.6851 1.3168 11.1381C1.8638 10.5781 2.6298 10.6051 3.2448 11.2061L7.9758 15.9511C8.2628 16.2381 8.5358 16.1971 8.6998 16.0331C8.8778 15.8551 8.9048 15.5811 8.6318 15.3081L1.4268 8.1031C0.8248 7.5011 0.7298 6.7901 1.2758 6.2301C1.8368 5.6831 2.6028 5.7101 3.2038 6.3121L9.9168 13.0251C10.2038 13.3121 10.4778 13.2711 10.6418 13.1071C10.8188 12.9291 10.8468 12.6561 10.5728 12.3821L2.7668 4.5761C2.1648 3.9741 2.0968 3.1671 2.6438 2.6071C3.1628 2.0871 3.9418 2.1971 4.5438 2.7981L12.3638 10.6051C12.5688 10.8101 12.8568 10.8921 13.0748 10.6731C13.2798 10.4681 13.2258 10.1671 13.0068 9.9621L6.2938 3.2361C5.6918 2.6341 5.6508 1.8551 6.2118 1.3081C6.7588 0.7611 7.4698 0.8431 8.0708 1.4451L17.3548 10.7281C17.7238 11.1111 18.1888 11.0561 18.5028 10.7421C18.7898 10.4541 18.8718 10.1131 18.6808 9.6481L16.8758 5.3551C16.5338 4.5351 16.7388 3.8511 17.3958 3.5501C18.0658 3.2221 18.7078 3.5641 19.0768 4.3701L22.4268 11.3431C24.2588 15.1441 23.7258 18.7261 20.9908 21.4471Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.982152873586944 24.346282618884498"
          className={className}
        >
          <path
            d="              M21.2695 21.6248C24.2365 18.6578 24.7695 14.8708 22.8695 10.9058L19.4785 3.8378C19.3285 3.5238 19.1365 3.2498 18.9175 3.0308C18.1385 2.2518 16.9905 2.2518 16.1835 3.0588C15.6365 3.6058 15.4725 4.4938 15.8965 5.4918L17.7425 9.7438C17.7835 9.8398 17.7695 9.8948 17.7285 9.9358C17.6735 9.9768 17.6195 9.9768 17.5645 9.9218L8.3905 0.7348C7.4335 -0.2222 6.2855 -0.2092 5.5055 0.5698C5.1095 0.9668 4.8905 1.4858 4.9455 2.0738C4.0295 1.1718 2.8395 1.0218 1.9645 1.8968C1.0895 2.7718 1.1995 4.0568 2.0745 4.9448C1.4865 4.8908 0.9665 5.1098 0.5705 5.5058C-0.2085 6.2848 -0.2225 7.4338 0.7345 8.3908L2.1425 9.7988C1.5545 9.7308 1.0355 9.9768 0.6385 10.3728C-0.1405 11.1528 -0.1405 12.2868 0.8165 13.2438L8.8005 21.2418C13.1895 25.6168 17.8785 25.0158 21.2695 21.6248ZM20.8185 21.1738C17.6605 24.3318 13.3265 24.7968 9.2925 20.7638L1.2945 12.7658C0.6385 12.1098 0.5155 11.3578 1.1175 10.7558C1.7185 10.1538 2.5395 10.1948 3.2085 10.8518L7.8845 15.5408C8.1445 15.8008 8.3495 15.7598 8.4725 15.6368C8.5955 15.5138 8.6235 15.3218 8.3635 15.0628L1.2125 7.9118C0.5565 7.2418 0.4475 6.4898 1.0355 5.9028C1.6365 5.3008 2.4705 5.3418 3.1265 5.9978L9.7855 12.6558C10.0445 12.9158 10.2505 12.8748 10.3595 12.7518C10.4965 12.6288 10.5235 12.4378 10.2635 12.1778L2.5525 4.4528C1.8825 3.7968 1.8005 2.9218 2.4025 2.3198C2.9495 1.7598 3.7965 1.8828 4.4535 2.5528L12.1915 10.2778C12.3555 10.4418 12.5745 10.5508 12.7515 10.3598C12.9295 10.1948 12.8335 9.9628 12.6695 9.7988L5.9985 3.1268C5.3415 2.4708 5.3005 1.6368 5.9025 1.0348C6.4905 0.4468 7.2425 0.5568 7.9125 1.2128L17.1135 10.4278C17.4555 10.7698 17.8925 10.7008 18.1795 10.4138C18.4395 10.1538 18.5215 9.8398 18.3435 9.4438L16.5115 5.2048C16.1285 4.3298 16.3335 3.5918 17.0445 3.2638C17.7695 2.9078 18.4665 3.2908 18.8635 4.1248L22.2535 11.1798C24.0035 14.7888 23.5525 18.4398 20.8185 21.1738Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}