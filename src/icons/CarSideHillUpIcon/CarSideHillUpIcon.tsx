import { IconProps } from "../../types"

export default function CarSideHillUpIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 46.900910243523015 36.70578290002203"
          className={className}
        >
          <path
            d="              M7.0112 7.4612L10.1012 2.1162C10.7982 0.8992 9.7862 -0.2218 8.5562 0.0382L3.9622 1.0082C3.1152 1.2002 2.7182 1.8832 2.9912 2.7042L4.4412 7.1472C4.8372 8.3642 6.3002 8.6782 7.0112 7.4612ZM15.6652 17.2232C17.1282 18.0572 18.8652 18.0022 20.2322 17.2092L31.0322 23.4442C31.0192 25.0022 31.8252 26.5612 33.2882 27.4092C34.7382 28.2432 36.4882 28.1742 37.8412 27.3812L39.3452 28.2432C41.1912 29.2952 43.0502 28.7622 44.1032 26.9302L46.1672 23.3622C47.0012 21.8992 47.4802 20.0672 45.5932 17.9892L44.3222 16.5942C43.8982 14.3932 42.7902 11.0712 38.9352 8.8562L36.8292 7.6532C33.0152 5.4522 31.1012 4.8772 27.9152 5.0002L23.2532 5.1782L19.0832 3.4012C15.9252 2.0752 13.2452 2.8952 11.7002 5.5202L10.6612 7.3112C9.4172 9.4162 10.0602 11.3312 12.0012 12.4522L13.4092 13.2722C13.3962 14.8312 14.2022 16.3892 15.6652 17.2232ZM40.4662 24.4692L40.0012 24.1962C40.2882 22.4052 39.4682 20.5182 37.8002 19.5612C36.1462 18.6182 34.1222 18.8232 32.7002 19.9712L22.3922 14.0242C22.6652 12.2332 21.8592 10.3602 20.2042 9.4032C18.5362 8.4462 16.4992 8.6652 15.0772 9.7992L14.4622 9.4442C14.2022 9.2932 14.1482 8.9792 14.2982 8.7192L15.1462 7.2292C15.5832 6.4632 16.1852 6.3272 17.2652 6.7912L22.5422 9.0342L28.0382 8.8422C30.5402 8.7602 31.5932 9.0752 34.9022 10.9892L37.0072 12.1922C39.3042 13.5182 40.4252 15.3092 40.6442 18.6042L42.7772 20.6822C42.9822 20.8742 42.9822 21.2022 42.8452 21.4482L41.2042 24.2502C41.0402 24.5382 40.7402 24.6332 40.4662 24.4692ZM0.2982 12.9572C-0.3168 14.0652 0.0522 15.4462 1.1052 16.0752L36.3512 36.4052C37.4042 37.0202 38.7982 36.6652 39.4272 35.5842C40.0422 34.4772 39.6732 33.0832 38.6202 32.4812L3.3742 12.1372C2.3222 11.5222 0.9272 11.8912 0.2982 12.9572ZM17.4022 14.2432C16.8822 13.9562 16.7182 13.3682 17.0322 12.8622C17.3202 12.3422 17.9072 12.1922 18.4132 12.4792C18.9192 12.7802 19.0832 13.3682 18.7962 13.8742C18.4952 14.3932 17.9072 14.5302 17.4022 14.2432ZM35.0252 24.4152C34.5052 24.1142 34.3412 23.5402 34.6422 23.0202C34.9432 22.5142 35.5172 22.3502 36.0362 22.6652C36.5422 22.9522 36.7062 23.5262 36.3922 24.0452C36.1052 24.5652 35.5312 24.7152 35.0252 24.4152Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.37028594861815 35.143635814087816"
          className={className}
        >
          <path
            d="              M6.1397 6.9227L9.1197 1.7687C9.7077 0.7427 8.8737 -0.1863 7.8347 0.0327L3.3367 0.9207C2.6127 1.0717 2.2847 1.6457 2.5167 2.3427L3.9937 6.6767C4.3347 7.6887 5.5517 7.9487 6.1397 6.9227ZM14.5347 16.4107C15.9837 17.2317 17.6927 17.1217 18.9637 16.2607L30.4207 22.8647C30.2977 24.4087 31.0497 25.9537 32.4987 26.7877C33.9347 27.6087 35.6437 27.4857 36.9147 26.6237L38.3917 27.4717C40.0187 28.4017 41.6597 27.9367 42.6027 26.2827L44.6947 22.6867C45.5007 21.2917 45.8567 19.6647 44.1887 17.8197L42.8077 16.3157C42.4107 14.1687 41.3717 10.8877 37.5577 8.6867L35.4387 7.4697C31.6377 5.2827 29.8197 4.7487 26.6887 4.8587L21.9037 5.0357L17.6927 3.2447C14.7257 1.9877 12.1417 2.7117 10.7197 5.1587L9.6807 6.9507C8.5867 8.8367 9.1067 10.5737 10.8837 11.5847L12.4697 12.5007C12.3467 14.0457 13.1127 15.5767 14.5347 16.4107ZM39.3627 24.5457L38.6377 24.1357C39.0617 22.3717 38.3097 20.4857 36.6687 19.5417C35.0147 18.5987 33.0047 18.8717 31.7057 20.1297L20.6867 13.7727C21.1107 12.0087 20.3717 10.1217 18.7177 9.1787C17.0637 8.2357 15.0537 8.5087 13.7547 9.7667L12.7027 9.1647C12.3197 8.9327 12.2507 8.5767 12.5107 8.1257L13.3997 6.5677C13.9737 5.5557 14.9167 5.3507 16.3527 5.9657L21.3427 8.0717L26.7847 7.8797C29.3817 7.7977 30.5437 8.1537 33.9347 10.0947L36.0397 11.3117C38.4057 12.6647 39.6357 14.6067 39.8957 17.9427L41.9467 19.9387C42.3567 20.3347 42.3287 20.7317 42.0697 21.1687L40.3197 24.2177C40.0597 24.6557 39.7317 24.7647 39.3627 24.5457ZM0.2337 12.2687C-0.2453 13.0887 0.0417 14.1147 0.8217 14.5787L36.0807 34.9227C36.8607 35.3737 37.8997 35.1147 38.3507 34.3217C38.8157 33.4877 38.5417 32.4487 37.7627 31.9967L2.5027 11.6537C1.7237 11.2017 0.6847 11.4757 0.2337 12.2687ZM15.9697 13.9637C15.2857 13.5807 15.0807 12.8287 15.4777 12.1727C15.8467 11.4897 16.6127 11.2837 17.2827 11.6667C17.9527 12.0497 18.1577 12.8157 17.7607 13.4857C17.3917 14.1557 16.6257 14.3467 15.9697 13.9637ZM33.9077 24.3267C33.2507 23.9447 33.0327 23.1787 33.4147 22.5227C33.8117 21.8527 34.5637 21.6477 35.2337 22.0307C35.9037 22.4127 36.1087 23.1787 35.7117 23.8347C35.3287 24.5187 34.5777 24.7237 33.9077 24.3267Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 46.18053246822246 35.96916329292533"
          className={className}
        >
          <path
            d="              M6.6052 7.2101L9.6402 1.9601C10.2962 0.8391 9.3672 -0.1999 8.2182 0.0331L3.6792 0.9761C2.8722 1.1401 2.5172 1.7691 2.7772 2.5351L4.2402 6.9231C4.6092 8.0581 5.9492 8.3321 6.6052 7.2101ZM15.1362 16.8491C16.5852 17.6691 18.3082 17.5871 19.6342 16.7671L30.7492 23.1661C30.6812 24.7241 31.4602 26.2831 32.9232 27.1171C34.3592 27.9371 36.0812 27.8551 37.4082 27.0211L38.8982 27.8821C40.6342 28.8801 42.3982 28.3751 43.3962 26.6251L45.4742 23.0421C46.2942 21.6211 46.7182 19.8711 44.9272 17.9161L43.6152 16.4661C43.2042 14.2921 42.1242 10.9981 38.2832 8.7831L36.1772 7.5661C32.3632 5.3781 30.5032 4.8181 27.3452 4.9411L22.6152 5.1051L18.4312 3.3281C15.3692 2.0421 12.7302 2.8081 11.2402 5.3511L10.2012 7.1421C9.0252 9.1521 9.6132 10.9701 11.4722 12.0501L12.9622 12.9121C12.9082 14.4701 13.6872 16.0011 15.1362 16.8491ZM39.9512 24.5051L39.3632 24.1771C39.7182 22.3861 38.9252 20.5131 37.2712 19.5561C35.6172 18.6131 33.5932 18.8591 32.2262 20.0481L21.5892 13.9101C21.9452 12.1321 21.1522 10.2591 19.5112 9.3021C17.8432 8.3451 15.8202 8.5911 14.4532 9.7811L13.6322 9.3161C13.3182 9.1251 13.2492 8.7961 13.4542 8.4411L14.3162 6.9231C14.8222 6.0351 15.5872 5.8711 16.8312 6.4041L21.9722 8.5911L27.4542 8.4001C29.9972 8.3041 31.0912 8.6461 34.4412 10.5741L36.5602 11.7771C38.8842 13.1171 40.0462 14.9761 40.2922 18.2981L42.3842 20.3351C42.6992 20.6231 42.6712 20.9781 42.4802 21.3201L40.7852 24.2461C40.5792 24.6011 40.2652 24.6971 39.9512 24.5051ZM0.2752 12.6381C-0.2858 13.6091 0.0422 14.8261 0.9722 15.3731L36.2182 35.7161C37.1482 36.2361 38.3782 35.9351 38.9252 34.9921C39.4722 34.0071 39.1442 32.7911 38.2142 32.2571L2.9682 11.9141C2.0382 11.3671 0.8082 11.6951 0.2752 12.6381ZM16.7222 14.1151C16.1342 13.7731 15.9432 13.1171 16.2982 12.5421C16.6262 11.9411 17.2962 11.7631 17.8842 12.1051C18.4722 12.4331 18.6502 13.1031 18.3082 13.6911C17.9802 14.2791 17.2962 14.4571 16.7222 14.1151ZM34.4952 24.3821C33.9212 24.0411 33.7302 23.3711 34.0582 22.7961C34.4132 22.2081 35.0702 22.0171 35.6582 22.3731C36.2452 22.7011 36.4232 23.3711 36.0812 23.9451C35.7402 24.5461 35.0832 24.7241 34.4952 24.3821Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.12184960792151 31.907907030791243"
          className={className}
        >
          <path
            d="              M5.2777 5.6876L7.9027 1.1486C8.2847 0.4786 7.7657 -0.0964 7.0687 0.0136L2.9117 0.6146C2.3657 0.6966 2.1187 1.1206 2.3247 1.6406L3.8827 5.5366C4.1287 6.2066 4.8947 6.3576 5.2777 5.6876ZM12.9067 14.4376C14.2597 15.2166 15.8457 15.0386 16.9527 14.1096L28.9297 21.0266C28.6697 22.4486 29.3127 23.9256 30.6657 24.7046C32.0197 25.4846 33.6187 25.2926 34.7267 24.3626L36.1897 25.2106C37.4887 25.9626 38.7457 25.5936 39.5117 24.2676L41.5767 20.7126C42.3007 19.4546 42.4377 18.1836 41.1527 16.8166L39.6757 15.2716C39.3207 13.2616 38.4587 10.1036 34.7817 7.9706L32.7167 6.7806C29.0797 4.6756 27.4527 4.1966 24.4997 4.3066L19.6877 4.4846L15.4087 2.6656C12.8657 1.5996 10.6367 2.1736 9.4337 4.2376L8.4497 5.9606C7.5337 7.5466 7.8747 8.8726 9.4197 9.7616L11.1697 10.7736C10.9237 12.1946 11.5667 13.6716 12.9067 14.4376ZM36.8457 23.6516L35.7387 23.0096C36.4357 21.3556 35.8207 19.4546 34.2207 18.5386C32.6207 17.6226 30.6797 18.0326 29.5997 19.4686L17.9647 12.7416C18.6757 11.0876 18.0607 9.2006 16.4607 8.2846C14.8617 7.3556 12.9067 7.7786 11.8397 9.2146L10.3227 8.3396C9.6247 7.9296 9.5297 7.4646 9.9807 6.6856L10.8967 5.0996C11.6487 3.7736 12.9747 3.4856 14.7517 4.2376L19.3597 6.1796L24.5547 6.0016C27.1937 5.9056 28.5057 6.3026 31.8687 8.2436L33.9477 9.4336C36.3537 10.8146 37.6797 12.8926 38.0077 16.1876L39.9087 18.0326C40.5237 18.6346 40.5237 19.1676 40.1137 19.8646L38.1997 23.1876C37.8297 23.8296 37.3927 23.9806 36.8457 23.6516ZM13.7537 12.9876C12.8107 12.4416 12.5097 11.3606 13.0567 10.4446C13.5897 9.4876 14.6837 9.1876 15.6267 9.7346C16.5707 10.2676 16.8707 11.3606 16.3107 12.3046C15.7777 13.2476 14.6837 13.5346 13.7537 12.9876ZM0.1227 10.8686C-0.1233 11.2786 0.0137 11.7986 0.4097 12.0306L34.6587 31.8006C35.0407 32.0196 35.5607 31.8966 35.7797 31.4996C36.0257 31.0626 35.8747 30.5426 35.4927 30.3236L1.2437 10.5546C0.8617 10.3356 0.3417 10.4726 0.1227 10.8686ZM31.5137 23.2416C30.5707 22.6946 30.2697 21.6146 30.8167 20.6856C31.3637 19.7416 32.4437 19.4416 33.4007 19.9876C34.3297 20.5216 34.6177 21.6146 34.0707 22.5586C33.5237 23.5016 32.4437 23.7886 31.5137 23.2416Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44.386852087891086 34.140304112249005"
          className={className}
        >
          <path
            d="              M5.5807 6.591L8.4937 1.546C9.0267 0.644 8.2877 -0.163 7.3717 0.028L2.9427 0.862C2.2867 0.985 1.9987 1.491 2.2177 2.12L3.7077 6.372C4.0087 7.261 5.0617 7.493 5.5807 6.591ZM13.8117 15.888C15.2467 16.708 16.9287 16.558 18.1597 15.655L30.0267 22.505C29.8487 24.023 30.5597 25.554 31.9817 26.388C33.4167 27.194 35.0987 27.044 36.3157 26.142L37.7647 26.976C39.2687 27.837 40.7727 27.4 41.6477 25.868L43.7527 22.259C44.5327 20.905 44.8197 19.415 43.2747 17.706L41.8387 16.148C41.4557 14.028 40.4577 10.774 36.6707 8.587L34.5377 7.357C30.7647 5.183 29.0007 4.663 25.8977 4.773L21.0437 4.95L16.8057 3.146C13.9617 1.942 11.4467 2.599 10.0927 4.923L9.0537 6.728C8.0417 8.464 8.4937 10.077 10.1617 11.048L11.8567 12.019C11.6927 13.536 12.4037 15.067 13.8117 15.888ZM38.6537 24.597L37.7507 24.091C38.2847 22.355 37.5737 20.468 35.9327 19.524C34.2917 18.581 32.3097 18.909 31.0797 20.235L19.5947 13.605C20.1147 11.868 19.4037 9.982 17.7767 9.038C16.1357 8.095 14.1397 8.423 12.9097 9.749L11.5827 8.983C11.1047 8.696 11.0367 8.314 11.3647 7.739L12.2807 6.14C12.9507 4.978 14.1127 4.732 15.7807 5.429L20.5657 7.452L25.9937 7.274C28.6317 7.179 29.8757 7.562 33.3077 9.53L35.4267 10.747C37.8327 12.114 39.1187 14.165 39.4327 17.515L41.4147 19.47C41.9487 20.003 41.9207 20.427 41.5797 21.001L39.7337 24.2C39.4327 24.733 39.0777 24.843 38.6537 24.597ZM15.0417 13.782C14.2627 13.345 14.0167 12.47 14.4817 11.718C14.9057 10.952 15.7807 10.706 16.5597 11.144C17.3387 11.595 17.5717 12.456 17.1067 13.235C16.6687 14.015 15.8077 14.233 15.0417 13.782ZM0.1807 11.814C-0.1883 12.47 0.0307 13.263 0.6317 13.618L35.9057 33.976C36.5067 34.317 37.3137 34.112 37.6687 33.497C38.0377 32.855 37.8057 32.048 37.2047 31.692L1.9447 11.349C1.3427 10.993 0.5367 11.212 0.1807 11.814ZM33.2117 24.269C32.4327 23.831 32.2007 22.956 32.6377 22.204C33.0757 21.439 33.9507 21.192 34.7297 21.644C35.4957 22.081 35.7277 22.942 35.2767 23.722C34.8257 24.501 33.9637 24.72 33.2117 24.269Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.83611100199383 33.578057597639706"
          className={className}
        >
          <path
            d="              M5.2662 6.3982L8.1512 1.4212C8.6292 0.5872 7.9592 -0.1508 7.1122 0.0272L2.7092 0.8332C2.1082 0.9432 1.8342 1.4072 2.0532 1.9952L3.5432 6.1932C3.8302 7.0272 4.7872 7.2182 5.2662 6.3982ZM13.4012 15.5852C14.8362 16.4052 16.5042 16.2412 17.6942 15.2982L29.8072 22.2982C29.5882 23.8022 30.2722 25.3332 31.6942 26.1532C33.1162 26.9602 34.7842 26.7962 35.9732 25.8532L37.4222 26.6872C38.8442 27.5212 40.2662 27.1112 41.1142 25.6342L43.2192 22.0252C43.9852 20.6852 44.2452 19.2632 42.7682 17.6362L41.2912 16.0362C40.9092 13.9442 39.9522 10.7042 36.1642 8.5172L34.0452 7.2862C30.2722 5.1122 28.5362 4.6202 25.4592 4.7162L20.5512 4.8942L16.2992 3.0892C13.5242 1.9132 11.0492 2.5422 9.7372 4.7982L8.6982 6.5892C7.7412 8.2572 8.1372 9.8022 9.7642 10.7322L11.5282 11.7572C11.3092 13.2472 12.0062 14.7782 13.4012 15.5852ZM38.2562 24.6222L37.2582 24.0622C37.8322 22.3392 37.1492 20.4522 35.5222 19.5092C33.8812 18.5792 31.9122 18.9212 30.7372 20.3022L18.9652 13.4932C19.5532 11.7842 18.8702 9.8982 17.2432 8.9542C15.6022 8.0252 13.6332 8.3662 12.4442 9.7472L10.9402 8.8722C10.4202 8.5712 10.3522 8.1612 10.7212 7.5322L11.6512 5.8922C12.3752 4.6482 13.6612 4.3742 15.4522 5.1262L20.1412 7.1092L25.5412 6.9172C28.2072 6.8352 29.4932 7.2322 32.9522 9.2142L35.0842 10.4172C37.5182 11.8122 38.8302 13.9172 39.1592 17.2802L41.1142 19.1942C41.7292 19.8102 41.6742 20.2612 41.3052 20.9032L39.4182 24.1852C39.0772 24.7732 38.7072 24.8962 38.2562 24.6222ZM14.5222 13.6852C13.6882 13.2062 13.4282 12.2772 13.9202 11.4702C14.3712 10.6362 15.3152 10.3762 16.1492 10.8552C16.9832 11.3332 17.2292 12.2632 16.7372 13.0832C16.2722 13.9172 15.3422 14.1772 14.5222 13.6852ZM0.1532 11.5662C-0.1618 12.1122 0.0302 12.7822 0.5362 13.0832L35.8092 33.4412C36.3012 33.7282 36.9852 33.5502 37.2862 33.0442C37.5862 32.4972 37.3952 31.8142 36.9032 31.5272L1.6292 11.1692C1.1372 10.8822 0.4402 11.0602 0.1532 11.5662ZM32.8012 24.2392C31.9812 23.7612 31.7212 22.8312 32.2002 22.0112C32.6642 21.1912 33.5942 20.9312 34.4422 21.4092C35.2622 21.8882 35.5082 22.8182 35.0302 23.6382C34.5512 24.4852 33.6212 24.7322 32.8012 24.2392Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44.80216011700459 34.568563409949064"
          className={className}
        >
          <path
            d="              M5.8196 6.7406L8.7586 1.6406C9.3196 0.6836 8.5396 -0.1644 7.5696 0.0276L3.1126 0.8886C2.4146 1.0256 2.1136 1.5586 2.3466 2.2146L3.8226 6.4936C4.1376 7.4506 5.2586 7.6836 5.8196 6.7406ZM14.1176 16.1056C15.5536 16.9256 17.2486 16.8026 18.4926 15.9136L30.1826 22.6546C30.0316 24.1856 30.7566 25.7166 32.1926 26.5506C33.6276 27.3706 35.3226 27.2346 36.5676 26.3456L38.0296 27.1796C39.5886 28.0816 41.1476 27.6306 42.0496 26.0446L44.1546 22.4496C44.9346 21.0686 45.2626 19.5236 43.6626 17.7456L42.2546 16.2146C41.8586 14.0816 40.8466 10.8276 37.0456 8.6266L34.9266 7.4096C31.1396 5.2226 29.3486 4.7026 26.2316 4.8126L21.4046 4.9766L17.1806 3.1856C14.2816 1.9686 11.7386 2.6526 10.3586 5.0316L9.3196 6.8226C8.2666 8.6266 8.7446 10.2946 10.4676 11.2796L12.1086 12.2226C11.9716 13.7536 12.6966 15.2846 14.1176 16.1056ZM38.9466 24.5686L38.1396 24.1036C38.6176 22.3536 37.8796 20.4666 36.2386 19.5236C34.5986 18.5936 32.6026 18.8946 31.3446 20.1936L20.0516 13.6716C20.5436 11.9216 19.8196 10.0346 18.1786 9.0916C16.5246 8.1486 14.5286 8.4626 13.2706 9.7476L12.0536 9.0506C11.6156 8.8046 11.5476 8.4216 11.8486 7.9026L12.7646 6.3166C13.3796 5.2226 14.4596 4.9906 16.0186 5.6596L20.8996 7.7246L26.3266 7.5336C28.9516 7.4506 30.1546 7.8206 33.5596 9.7756L35.6926 10.9916C38.0846 12.3456 39.3286 14.3556 39.6296 17.7046L41.6396 19.6736C42.1176 20.1386 42.0906 20.5486 41.7896 21.0816L39.9856 24.2126C39.6976 24.7046 39.3426 24.8146 38.9466 24.5686ZM15.4306 13.8636C14.6926 13.4396 14.4736 12.6186 14.8976 11.9086C15.3076 11.1836 16.1276 10.9506 16.8656 11.3746C17.5906 11.7846 17.8096 12.6056 17.3856 13.3296C16.9756 14.0686 16.1416 14.2866 15.4306 13.8636ZM0.1996 12.0036C-0.2104 12.7286 0.0356 13.6306 0.7056 14.0276L35.9656 34.3846C36.6496 34.7676 37.5516 34.5346 37.9616 33.8516C38.3716 33.1266 38.1126 32.2246 37.4426 31.8276L2.1826 11.4706C1.4986 11.0746 0.5966 11.3206 0.1996 12.0036ZM33.5046 24.2946C32.7796 23.8706 32.5476 23.0506 32.9716 22.3396C33.3816 21.6156 34.2016 21.3826 34.9406 21.8066C35.6646 22.2166 35.8836 23.0366 35.4596 23.7616C35.0356 24.4996 34.2156 24.7186 33.5046 24.2946Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.86770551480362 29.6883047506959"
          className={className}
        >
          <path
            d="              M5.2757 4.7495L7.5727 0.7985C7.8317 0.3465 7.5177 -0.0495 7.0257 0.0055L3.1697 0.3335C2.7187 0.3605 2.4997 0.7575 2.6917 1.1805L4.3317 4.6675C4.5237 5.1185 5.0297 5.2005 5.2757 4.7495ZM12.2477 12.9245C13.4917 13.6495 14.9957 13.4585 15.9937 12.5425L27.7657 19.3375C27.4647 20.6635 28.0387 22.0715 29.3107 22.7825C30.5687 23.5205 32.0727 23.3155 33.0707 22.3995L34.5747 23.2605C35.7087 23.9035 36.7347 23.6025 37.4047 22.4405L39.4137 18.9955C40.0837 17.8335 40.0567 16.7535 39.0317 15.7145L37.5277 14.2375C37.2267 12.3645 36.4747 9.3155 32.9337 7.2515L30.9787 6.1165C27.5057 4.0925 26.0157 3.6555 23.2407 3.7645L18.5367 3.9425L14.2307 2.1105C12.0017 1.1805 10.0877 1.6735 9.0347 3.5055L8.1187 5.1045C7.2437 6.6225 7.5177 7.6335 8.9667 8.4815L10.7027 9.4795C10.4027 10.8055 10.9907 12.2145 12.2477 12.9245ZM34.9977 22.3725L33.6857 21.6065C34.5877 20.0615 34.0687 18.1205 32.4957 17.2455C30.9507 16.3425 29.0507 16.8485 28.1487 18.3805L16.6227 11.7355C17.5117 10.2045 16.9917 8.2765 15.4337 7.3875C13.8887 6.4855 11.9747 6.9915 11.0857 8.5495L9.4997 7.6335C8.5707 7.1005 8.4197 6.5405 8.9937 5.5695L9.8967 4.0245C10.7027 2.6305 12.0837 2.3015 13.8477 3.0535L18.3317 4.9545L23.2537 4.7765C25.8517 4.6945 27.1917 5.0775 30.4587 6.9645L32.4417 8.1265C34.8067 9.4935 36.1597 11.5575 36.5017 14.7295L38.3067 16.4795C38.9357 17.0815 39.0037 17.7235 38.5527 18.5035L36.5977 21.8665C36.1877 22.5915 35.6677 22.7555 34.9977 22.3725ZM12.7407 12.0775C11.6467 11.4345 11.2907 10.1355 11.9197 9.0695C12.5487 7.9625 13.8477 7.6065 14.9277 8.2355C16.0347 8.8645 16.3907 10.1635 15.7477 11.2575C15.1187 12.3375 13.8207 12.6925 12.7407 12.0775ZM0.0667 9.9305C-0.0703 10.1905 0.0117 10.4915 0.2437 10.6415L33.1387 29.6185C33.3707 29.7555 33.6577 29.6865 33.8087 29.4545C33.9587 29.1805 33.8637 28.8665 33.6307 28.7435L0.7367 9.7535C0.5177 9.6165 0.2027 9.6985 0.0667 9.9305ZM29.8027 21.9345C28.7087 21.2925 28.3667 19.9935 28.9957 18.9265C29.6247 17.8195 30.9097 17.4645 32.0177 18.0925C33.1117 18.7215 33.4397 20.0205 32.8247 21.1145C32.1817 22.1945 30.8967 22.5495 29.8027 21.9345Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.71528957800257 28.557811139999274"
          className={className}
        >
          <path
            d="              M5.2929 4.2663L7.4119 0.6153C7.6179 0.2743 7.3989 -0.0137 7.0019 0.0003L3.3109 0.1783C2.9009 0.1923 2.6959 0.5613 2.8869 0.9433L4.5549 4.2253C4.7329 4.5673 5.1019 4.6083 5.2929 4.2663ZM11.9109 12.1543C13.1139 12.8523 14.5629 12.6473 15.4929 11.7313L27.1819 18.4713C26.8539 19.7563 27.4009 21.1093 28.6179 21.8073C29.8339 22.5183 31.2839 22.2993 32.2129 21.3833L33.7579 22.2583C34.7969 22.8463 35.7129 22.5863 36.3419 21.5063L38.3109 18.1153C38.9539 16.9943 38.8299 16.0103 37.9419 15.1493L36.4379 13.7133C36.1639 11.8953 35.4669 8.9013 32.0079 6.8773L30.0799 5.7703C26.7039 3.8013 25.2819 3.3773 22.6019 3.4863L17.9539 3.6643L13.6329 1.8323C11.5689 0.9573 9.8049 1.4223 8.8339 3.1313L7.9459 4.6763C7.1119 6.1393 7.3299 7.0003 8.7389 7.8203L10.4749 8.8183C10.1469 10.1043 10.6939 11.4573 11.9109 12.1543ZM34.0589 21.7113L32.6369 20.8773C32.6639 20.8223 32.7049 20.7683 32.7329 20.7133C33.6079 19.2363 33.1159 17.4043 31.6249 16.5703C30.1619 15.7233 28.3579 16.2153 27.5099 17.6643C27.4689 17.7193 27.4419 17.7873 27.4139 17.8423L15.9299 11.2113C15.9569 11.1563 15.9979 11.1023 16.0259 11.0473C16.8729 9.5843 16.3949 7.7663 14.9179 6.9323C13.4549 6.0703 11.6369 6.5633 10.8029 8.0393C10.7619 8.0943 10.7349 8.1493 10.7069 8.2033L9.0799 7.2603C8.0409 6.6723 7.8639 6.0703 8.4929 5.0043L9.3809 3.4863C10.2289 2.0513 11.6229 1.6953 13.3869 2.4473L17.8169 4.3343L22.6019 4.1563C25.1589 4.0743 26.5259 4.4573 29.7389 6.3173L31.6799 7.4513C34.0179 8.8053 35.3849 10.8693 35.7269 13.9863L37.4909 15.6953C38.1199 16.2833 38.2289 16.9943 37.7499 17.8013L35.7819 21.1783C35.3439 21.9573 34.7839 22.1353 34.0589 21.7113ZM12.2249 11.6083C11.0489 10.9243 10.6659 9.5163 11.3499 8.3673C12.0199 7.1783 13.4279 6.7953 14.5769 7.4793C15.7519 8.1493 16.1489 9.5433 15.4649 10.7193C14.7949 11.8813 13.3869 12.2643 12.2249 11.6083ZM0.0569 9.4613C-0.0521 9.6253 0.0019 9.8173 0.1659 9.9263L32.3639 28.5063C32.5139 28.6023 32.6919 28.5613 32.8009 28.4103C32.8969 28.2053 32.8289 28.0143 32.6779 27.9323L0.4949 9.3383C0.3439 9.2563 0.1389 9.3113 0.0569 9.4613ZM28.9319 21.2463C27.7559 20.5633 27.3869 19.1683 28.0709 18.0203C28.7409 16.8303 30.1349 16.4473 31.3249 17.1313C32.4869 17.8013 32.8559 19.1953 32.1859 20.3713C31.5019 21.5333 30.1079 21.9163 28.9319 21.2463Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}