import { IconProps } from "../../types"

export default function BandageFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.92261014313251 29.97900928049737"
          className={className}
        >
          <path
            d="              M25.1425 16.1308L27.4665 13.6018C30.7755 9.9928 30.6795 5.5898 27.5485 2.4048C24.4045 -0.7812 19.9745 -0.8492 16.3515 2.4868L13.8355 4.8108C15.6815 4.0178 17.2405 4.9338 18.6485 6.3558L23.6115 11.3048C25.0465 12.7408 25.9355 14.2718 25.1425 16.1308ZM13.0705 21.8188C14.5875 23.3228 16.0235 23.3638 17.5545 21.8188L21.7655 17.6078C23.3245 16.0488 23.2965 14.6268 21.7935 13.1228L16.8305 8.1608C15.3265 6.6568 13.9045 6.6158 12.3455 8.1738L8.1345 12.3848C6.5895 13.9298 6.6305 15.3658 8.1345 16.8698ZM13.9315 12.9048C13.3435 12.3168 13.3435 11.3728 13.9185 10.8128C14.5055 10.2248 15.4215 10.2248 16.0095 10.8128C16.5845 11.3728 16.5975 12.3028 15.9685 12.9048C15.4215 13.4378 14.4785 13.4518 13.9315 12.9048ZM10.7595 16.0358C10.1715 15.4478 10.1715 14.5448 10.7595 13.9438C11.3345 13.3558 12.2635 13.3698 12.8515 13.9708C13.3985 14.5318 13.4255 15.4478 12.8515 16.0218C12.2365 16.6368 11.3345 16.6098 10.7595 16.0358ZM19.1405 16.0358C18.5665 16.6098 17.6365 16.6098 17.0485 16.0218C16.4885 15.4608 16.4885 14.5178 17.0485 13.9708C17.6645 13.3698 18.5665 13.3698 19.1405 13.9438C19.7285 14.5318 19.7285 15.4478 19.1405 16.0358ZM2.3785 27.5748C5.5095 30.7598 9.9535 30.8288 13.5625 27.4928L16.0785 25.1678C14.2325 25.9608 12.6735 25.0448 11.2655 23.6368L6.3025 18.6738C4.8675 17.2388 3.9785 15.7208 4.7855 13.8478L2.4605 16.3768C-0.8475 19.9868 -0.7655 24.3888 2.3785 27.5748ZM13.9185 19.1938C13.3435 18.6198 13.3025 17.7168 13.9315 17.0878C14.5055 16.5278 15.4355 16.5408 15.9685 17.0878C16.5565 17.7038 16.5975 18.6198 16.0095 19.1938C15.3945 19.7818 14.5055 19.7818 13.9185 19.1938Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.99874505665714 29.04017417221576"
          className={className}
        >
          <path
            d="              M24.3638 15.2514L26.6198 12.7904C29.7638 9.3594 29.7638 5.2574 26.7838 2.2364C23.8028 -0.7856 19.6468 -0.7586 16.2288 2.4004L13.7818 4.6554C15.2988 4.0814 16.7078 4.6834 18.0878 6.0644L23.0508 11.0274C24.4318 12.4074 24.9378 13.7204 24.3638 15.2514ZM12.4828 21.3904C13.9188 22.8254 15.2988 22.8664 16.7758 21.3904L21.3698 16.7964C22.8598 15.3064 22.8188 13.9524 21.3828 12.5034L16.5018 7.6364C15.0668 6.2004 13.7128 6.1594 12.2228 7.6504L7.6288 12.2434C6.1528 13.7204 6.1938 15.0874 7.6288 16.5364ZM13.5358 12.4894C12.9888 11.9434 12.9888 11.0684 13.5218 10.5344C14.0688 9.9744 14.9298 9.9744 15.4768 10.5344C16.0238 11.0684 16.0378 11.9154 15.4628 12.4894C14.9438 12.9954 14.0548 13.0094 13.5358 12.4894ZM10.5008 15.4974C9.9538 14.9374 9.9538 14.1034 10.5008 13.5294C11.0468 12.9824 11.9088 12.9954 12.4688 13.5564C12.9748 14.0754 13.0018 14.9374 12.4688 15.4844C11.8948 16.0584 11.0468 16.0304 10.5008 15.4974ZM18.4848 15.4974C17.9518 16.0304 17.0768 16.0304 16.5298 15.4844C16.0098 14.9644 16.0098 14.0754 16.5298 13.5564C17.1038 12.9954 17.9518 12.9954 18.4848 13.5294C19.0448 14.0894 19.0448 14.9374 18.4848 15.4974ZM2.2148 26.8044C5.1958 29.8254 9.3518 29.7984 12.7698 26.6404L15.2168 24.3704C13.6858 24.9454 12.3188 24.3704 10.9378 22.9894L5.9608 18.0274C4.5808 16.6324 4.0748 15.3204 4.6488 13.8024L2.3788 16.2494C-0.7792 19.6674 -0.7512 23.7824 2.2148 26.8044ZM13.5218 18.5194C12.9888 17.9724 12.9608 17.1244 13.5358 16.5504C14.0688 16.0174 14.9438 16.0304 15.4628 16.5504C16.0098 17.1114 16.0378 17.9724 15.4768 18.5194C14.9168 19.0664 14.0688 19.0664 13.5218 18.5194Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.483487608083415 29.528102182905034"
          className={className}
        >
          <path
            d="              M24.7735 15.7078L27.0705 13.2058C30.2965 9.6918 30.2425 5.4258 27.1795 2.3228C24.1305 -0.7812 19.8245 -0.8082 16.2965 2.4458L13.8085 4.7288C15.5035 4.0448 16.9945 4.8108 18.3885 6.2058L23.3515 11.1688C24.7595 12.5768 25.4575 13.9988 24.7735 15.7078ZM12.7965 21.6138C14.2735 23.0898 15.6815 23.1178 17.1855 21.6138L21.5745 17.2248C23.1055 15.6938 23.0785 14.2988 21.6015 12.8228L16.6795 7.9008C15.2035 6.4378 13.8085 6.3968 12.2915 7.9278L7.8885 12.3168C6.3845 13.8208 6.4255 15.2288 7.8885 16.7058ZM13.7405 12.6998C13.1665 12.1258 13.1665 11.2228 13.7265 10.6758C14.3005 10.1018 15.1895 10.1018 15.7635 10.6758C16.3105 11.2228 16.3375 12.1118 15.7365 12.6998C15.1895 13.2328 14.2875 13.2468 13.7405 12.6998ZM10.6365 15.7758C10.0625 15.2018 10.0625 14.3268 10.6365 13.7518C11.1975 13.1778 12.0995 13.1918 12.6735 13.7798C13.1935 14.3128 13.2205 15.2018 12.6735 15.7618C12.0725 16.3638 11.1975 16.3358 10.6365 15.7758ZM18.8395 15.7758C18.2795 16.3358 17.3765 16.3358 16.8025 15.7618C16.2695 15.2288 16.2695 14.2988 16.8025 13.7798C17.4045 13.1918 18.2795 13.1918 18.8395 13.7518C19.4005 14.3128 19.4005 15.2018 18.8395 15.7758ZM2.2965 27.2058C5.3595 30.3088 9.6665 30.3358 13.1935 27.0828L15.6685 24.7858C13.9725 25.4828 12.5095 24.7168 11.1155 23.3228L6.1385 18.3598C4.7305 16.9518 4.0335 15.5298 4.7165 13.8208L2.4195 16.3088C-0.8205 19.8228 -0.7515 24.1018 2.2965 27.2058ZM13.7265 18.8658C13.1665 18.3048 13.1385 17.4298 13.7405 16.8288C14.3005 16.2818 15.2035 16.2948 15.7365 16.8288C16.2965 17.4168 16.3375 18.3048 15.7635 18.8658C15.1755 19.4398 14.3005 19.4398 13.7265 18.8658Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.58221547372484 27.61247295194442"
          className={className}
        >
          <path
            d="              M22.8687 14.3119L25.3157 11.6869C28.2417 8.5429 28.3367 4.7559 25.5887 1.9939C22.8547 -0.7811 19.0127 -0.6311 15.8957 2.2679L13.2707 4.7149C14.3367 4.1949 15.6907 4.4409 16.9077 5.6579L22.0887 10.8399C23.3057 12.0569 23.3877 13.2459 22.8687 14.3119ZM11.6707 20.6429C13.0247 21.9959 14.3237 22.0229 15.7177 20.6429L20.6397 15.7069C22.0347 14.3119 22.0067 13.0269 20.6537 11.6739L15.9227 6.9299C14.5697 5.5759 13.2847 5.5489 11.8897 6.9429L6.9547 11.8649C5.5597 13.2599 5.6007 14.5589 6.9547 15.9119ZM12.9557 11.7689C12.4637 11.2769 12.4637 10.5249 12.9427 10.0469C13.4207 9.5679 14.1597 9.5679 14.6517 10.0469C15.1297 10.5249 15.1437 11.2639 14.6377 11.7689C14.1867 12.2209 13.4077 12.2209 12.9557 11.7689ZM10.0577 14.6539C9.5657 14.1619 9.5657 13.4239 10.0577 12.9319C10.5497 12.4389 11.2887 12.4529 11.7807 12.9449C12.2317 13.4099 12.2457 14.1619 11.7807 14.6269C11.2607 15.1459 10.5367 15.1189 10.0577 14.6539ZM17.5367 14.6539C17.0577 15.1189 16.3057 15.1189 15.8137 14.6269C15.3627 14.1759 15.3627 13.4099 15.8137 12.9449C16.3197 12.4389 17.0577 12.4529 17.5367 12.9319C18.0287 13.4239 18.0287 14.1619 17.5367 14.6539ZM1.9917 25.6049C4.7257 28.3809 8.5947 28.2709 11.6847 25.3179L14.2547 22.8299C13.1747 23.3499 11.9717 23.2259 10.7547 22.0099L5.5597 16.8139C4.3567 15.5979 4.2337 14.4079 4.7527 13.3279L2.2787 15.8979C-0.6743 19.0019 -0.7433 22.8159 1.9917 25.6049ZM12.9427 17.5249C12.4637 17.0599 12.4507 16.3219 12.9557 15.8159C13.4207 15.3379 14.1867 15.3509 14.6377 15.8159C15.1297 16.3089 15.1437 17.0599 14.6517 17.5249C14.1457 18.0179 13.4207 18.0179 12.9427 17.5249Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.415498549001065 28.429851237501232"
          className={className}
        >
          <path
            d="              M23.8706 14.6747L26.0846 12.2687C29.1336 8.9597 29.1746 5.0357 26.3036 2.1237C23.4186 -0.7883 19.4406 -0.6923 16.1456 2.3287L13.7396 4.5577C15.0386 4.1337 16.3646 4.5167 17.7176 5.8697L22.6946 10.8467C24.0476 12.1997 24.2936 13.3757 23.8706 14.6747ZM12.1126 21.1147C13.5066 22.5087 14.8336 22.5357 16.2686 21.1147L21.1086 16.2607C22.5436 14.8247 22.5166 13.5127 21.1226 12.1177L16.3096 7.2917C14.9156 5.8977 13.5886 5.8697 12.1536 7.3057L7.2996 12.1457C5.8776 13.5807 5.9186 14.9207 7.2996 16.3017ZM13.2886 12.2277C12.7546 11.6947 12.7546 10.8607 13.2746 10.3407C13.7936 9.8077 14.6146 9.8077 15.1476 10.3407C15.6536 10.8607 15.6806 11.6667 15.1206 12.2277C14.6276 12.7197 13.7806 12.7197 13.2886 12.2277ZM10.3346 15.1537C9.8156 14.6197 9.8156 13.7997 10.3346 13.2667C10.8686 12.7337 11.6886 12.7607 12.2216 13.2937C12.7136 13.7857 12.7276 14.6197 12.2216 15.1257C11.6616 15.6867 10.8546 15.6587 10.3346 15.1537ZM18.0736 15.1537C17.5536 15.6587 16.7196 15.6587 16.2006 15.1257C15.6946 14.6337 15.6946 13.7857 16.2006 13.2937C16.7476 12.7467 17.5536 12.7607 18.0736 13.2667C18.6066 13.7997 18.6066 14.6197 18.0736 15.1537ZM2.1186 26.2957C4.9896 29.2077 8.9816 29.1397 12.2626 26.0907L14.6556 23.8627C13.3426 24.2727 12.0716 23.9307 10.7316 22.5767L5.7416 17.6007C4.4016 16.2467 4.1416 15.0717 4.5656 13.7587L2.3236 16.1517C-0.7254 19.4467 -0.7524 23.3837 2.1186 26.2957ZM13.2746 18.0787C12.7546 17.5597 12.7416 16.7527 13.2886 16.1927C13.7936 15.6867 14.6276 15.6997 15.1206 16.1927C15.6536 16.7397 15.6806 17.5597 15.1476 18.0787C14.6006 18.6127 13.7936 18.6127 13.2746 18.0787Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.08339361583138 28.097903367945136"
          className={className}
        >
          <path
            d="              M23.5841 14.3746L25.7851 11.9816C28.7651 8.7416 28.8471 4.9136 26.0311 2.0696C23.2011 -0.7874 19.3321 -0.6644 16.1051 2.3026L13.7261 4.5036C14.9021 4.1616 16.1731 4.4356 17.5131 5.7746L22.4901 10.7516C23.8301 12.0776 23.9251 13.1856 23.5841 14.3746ZM11.8941 20.9646C13.2611 22.3316 14.5871 22.3726 15.9821 20.9646L20.9591 15.9746C22.3801 14.5656 22.3531 13.2676 20.9861 11.8996L16.1871 7.1016C14.8201 5.7336 13.5211 5.7066 12.1131 7.1286L7.1231 12.1046C5.7281 13.5136 5.7551 14.8256 7.1231 16.1926ZM13.1521 12.0776C12.6321 11.5586 12.6321 10.7516 13.1251 10.2456C13.6441 9.7266 14.4371 9.7266 14.9571 10.2456C15.4621 10.7516 15.4761 11.5446 14.9431 12.0776C14.4511 12.5566 13.6301 12.5566 13.1521 12.0776ZM10.2531 14.9626C9.7341 14.4426 9.7341 13.6496 10.2531 13.1306C10.7731 12.6106 11.5661 12.6246 12.0851 13.1446C12.5641 13.6366 12.5781 14.4426 12.0851 14.9356C11.5391 15.4816 10.7461 15.4546 10.2531 14.9626ZM17.8411 14.9626C17.3351 15.4546 16.5291 15.4546 16.0091 14.9356C15.5311 14.4566 15.5311 13.6366 16.0091 13.1446C16.5431 12.6106 17.3351 12.6246 17.8411 13.1306C18.3611 13.6496 18.3611 14.4426 17.8411 14.9626ZM2.0641 26.0226C4.8801 28.8806 8.7631 28.7716 11.9761 25.7906L14.3411 23.5756C13.1521 23.9176 11.9491 23.6856 10.6091 22.3586L5.6321 17.3686C4.2931 16.0426 4.1691 14.9356 4.5111 13.7456L2.2961 16.1106C-0.6979 19.3376 -0.7519 23.1796 2.0641 26.0226ZM13.1251 17.8336C12.6321 17.3416 12.6051 16.5486 13.1521 16.0156C13.6441 15.5096 14.4511 15.5226 14.9431 16.0156C15.4621 16.5216 15.4761 17.3416 14.9571 17.8336C14.4231 18.3536 13.6441 18.3536 13.1251 17.8336Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.660982011018724 28.69230885473142"
          className={className}
        >
          <path
            d="              M24.072 14.9268L26.314 12.4938C29.404 9.1308 29.417 5.1248 26.505 2.1718C23.58 -0.7822 19.533 -0.7272 16.183 2.3628L13.749 4.5918C15.144 4.1128 16.511 4.5918 17.865 5.9448L22.841 10.9218C24.208 12.2888 24.564 13.5188 24.072 14.9268ZM12.273 21.2298C13.681 22.6378 15.035 22.6788 16.484 21.2298L21.214 16.4998C22.677 15.0368 22.65 13.6968 21.228 12.2888L16.388 7.4348C14.98 6.0268 13.64 5.9998 12.177 7.4628L7.447 12.1928C5.997 13.6418 6.025 14.9958 7.447 16.4038ZM13.394 12.3428C12.847 11.7968 12.847 10.9488 13.38 10.4288C13.914 9.8828 14.747 9.8828 15.281 10.4288C15.814 10.9488 15.828 11.7828 15.267 12.3428C14.761 12.8358 13.9 12.8488 13.394 12.3428ZM10.414 15.2968C9.867 14.7628 9.867 13.9288 10.414 13.3828C10.947 12.8488 11.781 12.8628 12.328 13.4098C12.82 13.9158 12.847 14.7628 12.328 15.2828C11.753 15.8428 10.933 15.8158 10.414 15.2968ZM18.247 15.2968C17.728 15.8158 16.88 15.8158 16.333 15.2828C15.828 14.7768 15.828 13.9018 16.333 13.4098C16.894 12.8488 17.728 12.8628 18.247 13.3828C18.794 13.9288 18.794 14.7628 18.247 15.2968ZM2.156 26.5208C5.068 29.4738 9.142 29.4198 12.478 26.3298L14.884 24.0738C13.49 24.5658 12.177 24.1148 10.81 22.7608L5.833 17.7848C4.48 16.4178 4.111 15.1738 4.589 13.7788L2.347 16.1848C-0.743 19.5348 -0.756 23.5538 2.156 26.5208ZM13.38 18.2628C12.847 17.7438 12.833 16.9098 13.394 16.3488C13.914 15.8298 14.761 15.8428 15.267 16.3488C15.8 16.8958 15.828 17.7438 15.281 18.2628C14.734 18.8098 13.914 18.8098 13.38 18.2628Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.933294943744382 26.960428770949406"
          className={className}
        >
          <path
            d="              M21.9144 14.2508L24.7164 11.2978C27.5464 8.2898 27.6834 4.5578 25.0314 1.8908C22.3924 -0.7752 18.6194 -0.5832 15.6384 2.2198L12.6854 5.0088C13.6014 4.2568 15.0644 4.4618 16.1174 5.5148L21.5854 10.9698C22.6244 12.0218 22.6794 13.3348 21.9144 14.2508ZM11.3864 20.1978C12.7264 21.5378 13.9984 21.5788 15.3784 20.1978L20.2184 15.3308C21.5994 13.9638 21.5724 12.7058 20.2464 11.3658L15.5704 6.6898C14.2304 5.3498 12.9724 5.3368 11.5914 6.7038L6.7244 11.5578C5.3574 12.9248 5.3984 14.2098 6.7244 15.5498ZM12.7124 11.3658C12.2614 10.9008 12.2614 10.2308 12.6854 9.7938C13.1504 9.3428 13.8064 9.3428 14.2574 9.7938C14.6954 10.2308 14.7084 10.8878 14.2444 11.3658C13.8204 11.7758 13.1234 11.7758 12.7124 11.3658ZM9.8144 14.2368C9.3634 13.7858 9.3634 13.1298 9.8144 12.6648C10.2654 12.2138 10.9354 12.2408 11.3864 12.6918C11.7964 13.1018 11.8244 13.7858 11.3864 14.2238C10.9084 14.6878 10.2514 14.6748 9.8144 14.2368ZM17.1424 14.2368C16.7054 14.6748 16.0214 14.6748 15.5704 14.2238C15.1464 13.7998 15.1464 13.1018 15.5704 12.6918C16.0484 12.2138 16.7054 12.2408 17.1424 12.6648C17.5934 13.1298 17.5934 13.7858 17.1424 14.2368ZM1.8984 25.0238C4.5374 27.7178 8.3654 27.5948 11.3044 24.6958L14.1624 21.8518C13.2184 22.6178 12.0154 22.5908 10.9624 21.5378L5.4944 16.0688C4.4414 15.0158 4.3184 13.7038 5.0704 12.7608L2.2404 15.6318C-0.6446 18.5708 -0.7266 22.3448 1.8984 25.0238ZM12.6854 17.1218C12.2614 16.6838 12.2344 16.0278 12.7124 15.5498C13.1504 15.1118 13.8204 15.1258 14.2444 15.5498C14.6954 16.0008 14.7084 16.6838 14.2574 17.1218C13.7924 17.5728 13.1504 17.5728 12.6854 17.1218Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.599735282678413 26.61878094475224"
          className={className}
        >
          <path
            d="              M21.4378 14.2112C21.4788 14.1702 21.5338 14.1292 21.5748 14.0742L24.4048 11.0932C27.1938 8.1542 27.3438 4.4492 24.7468 1.8382C22.1628 -0.7738 18.4028 -0.5548 15.5038 2.1932L12.4968 5.0502C12.4558 5.0782 12.4148 5.1192 12.3738 5.1602L12.4968 5.0502C13.3578 4.2852 14.7938 4.5042 15.7228 5.4332L21.3148 11.0252C22.2308 11.9552 22.3128 13.2262 21.5748 14.0742ZM11.2388 19.9802C12.5648 21.3062 13.8358 21.3342 15.2038 19.9802L20.0158 15.1402C21.3698 13.7872 21.3558 12.5292 20.0298 11.2032L15.3948 6.5682C14.0688 5.2422 12.8108 5.2282 11.4438 6.5822L6.6178 11.3942C5.2508 12.7612 5.2918 14.0332 6.6178 15.3592ZM12.5788 11.1482C12.1548 10.7112 12.1548 10.0682 12.5648 9.6582C13.0018 9.2202 13.6308 9.2202 14.0548 9.6582C14.4788 10.0682 14.4928 10.6972 14.0418 11.1482C13.6448 11.5452 12.9888 11.5452 12.5788 11.1482ZM9.6938 14.0332C9.2558 13.5952 9.2558 12.9662 9.6938 12.5292C10.1178 12.0912 10.7468 12.1192 11.1838 12.5432C11.5808 12.9532 11.5938 13.5952 11.1838 14.0062C10.7328 14.4572 10.1038 14.4432 9.6938 14.0332ZM16.9398 14.0332C16.5298 14.4432 15.8868 14.4432 15.4498 14.0062C15.0528 13.6092 15.0528 12.9532 15.4498 12.5432C15.9008 12.0912 16.5298 12.1192 16.9398 12.5292C17.3768 12.9662 17.3768 13.5952 16.9398 14.0332ZM1.8598 24.7382C4.4438 27.3632 8.2578 27.2402 11.1158 24.3692L14.1098 21.3472C13.2488 22.2362 12.0318 22.2772 11.0608 21.3062L5.4558 15.6872C4.4848 14.7162 4.3618 13.3362 5.2508 12.4612L2.2288 15.4822C-0.6282 18.3392 -0.7242 22.0992 1.8598 24.7382ZM12.5648 16.9042C12.1548 16.4942 12.1268 15.8652 12.5788 15.4142C13.0018 14.9902 13.6448 15.0172 14.0418 15.4142C14.4788 15.8512 14.4928 16.4942 14.0548 16.9042C13.6038 17.3412 13.0018 17.3412 12.5648 16.9042Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
