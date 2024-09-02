import { IconProps } from "../../types"

export default function SuitcaseCartIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.16015625 37.40625"
          className={className}
        >
          <path
            d="              M33.4683 21.8062C35.8883 21.8062 37.1603 20.5352 37.1603 18.1292V7.9022C37.1603 5.4822 35.8883 4.2242 33.4683 4.2242H29.9823V2.9672C29.9823 1.0252 28.8063 0.0002 26.6053 0.0002H22.2583C20.0293 0.0002 18.8673 1.0112 18.8673 2.9672V4.2242H15.3943C12.9613 4.2242 11.6893 5.4822 11.6893 7.9022V18.1292C11.6893 20.5352 12.9613 21.8062 15.3943 21.8062ZM21.9843 2.9942C21.9843 2.7482 22.1353 2.6382 22.4633 2.6382H26.4003C26.7283 2.6382 26.8653 2.7482 26.8653 2.9942V4.2242H21.9843ZM34.6723 28.9842C36.0933 28.9842 37.1603 28.0002 37.1603 26.5512C37.1603 25.1012 36.0933 24.1312 34.6723 24.1312H10.5683C9.7893 24.1312 9.3513 23.6792 9.3513 22.9002V8.0802C9.3513 4.9082 7.5193 3.0762 4.3473 3.0762H2.4203C1.0933 3.0762 0.0003 4.1702 0.0003 5.5102C0.0003 6.8492 1.0933 7.9292 2.4203 7.9292H3.2813C4.0473 7.9292 4.4983 8.3812 4.4983 9.1602V23.9802C4.4983 27.1522 6.3303 28.9842 9.5023 28.9842ZM15.6953 18.4842C15.4633 18.4842 15.3403 18.3612 15.3403 18.1422V7.8752C15.3403 7.6562 15.4633 7.5332 15.6953 7.5332H17.0623V18.4842ZM20.4673 18.4842V7.5332H28.3833V18.4842ZM33.1543 18.4842H31.8013V7.5332H33.1543C33.3863 7.5332 33.5103 7.6562 33.5103 7.8752V18.1422C33.5103 18.3612 33.3863 18.4842 33.1543 18.4842ZM29.9143 37.4062C31.6093 37.4062 33.0173 35.9842 33.0173 34.3032C33.0173 32.5942 31.6093 31.1722 29.9143 31.1722C28.2323 31.1722 26.8103 32.5942 26.8103 34.3032C26.8103 35.9842 28.2323 37.4062 29.9143 37.4062ZM15.2583 37.4062C16.9533 37.4062 18.3613 35.9842 18.3613 34.3032C18.3613 32.5942 16.9533 31.1722 15.2583 31.1722C13.5623 31.1722 12.1543 32.5942 12.1543 34.3032C12.1543 35.9842 13.5623 37.4062 15.2583 37.4062Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.341796875 34.86328125"
          className={className}
        >
          <path
            d="              M31.9243 21.3557C34.1253 21.3557 35.3423 20.1797 35.3423 18.0467V7.3827C35.3423 5.2497 34.1253 4.0737 31.9243 4.0737H28.3423V3.0347C28.3423 1.0667 27.1933 -0.0003 25.0603 -0.0003H20.4263C18.2653 -0.0003 17.1443 1.0257 17.1443 3.0347V4.0737H13.5623C11.3613 4.0737 10.1443 5.2497 10.1443 7.3827V18.0467C10.1443 20.1797 11.3613 21.3557 13.5623 21.3557ZM19.6743 2.9937C19.6743 2.4887 19.9473 2.2287 20.5083 2.2287H24.9783C25.5393 2.2287 25.8123 2.4887 25.8123 2.9937V4.0737H19.6743ZM33.5373 27.1247C34.5493 27.1247 35.3423 26.4007 35.3423 25.3617C35.3423 24.3357 34.5493 23.5977 33.5373 23.5977H9.2833C8.3263 23.5977 7.8203 23.0777 7.8203 22.1207V7.9157C7.8203 5.0587 6.3163 3.5687 3.4453 3.5687H1.7633C0.7933 3.5687 0.0003 4.3617 0.0003 5.3317C0.0003 6.3027 0.7933 7.0957 1.7633 7.0957H2.8303C3.7873 7.0957 4.2933 7.6147 4.2933 8.5727V22.7907C4.2933 25.6347 5.7973 27.1247 8.6683 27.1247ZM13.7133 18.7027C13.2343 18.7027 12.9743 18.4567 12.9743 18.0197V7.4097C12.9743 6.9727 13.2343 6.7267 13.7133 6.7267H15.0663V18.7027ZM17.7603 18.7027V6.7267H27.7263V18.7027ZM31.7733 18.7027H30.4203V6.7267H31.7733C32.2523 6.7267 32.5113 6.9727 32.5113 7.4097V18.0197C32.5113 18.4567 32.2523 18.7027 31.7733 18.7027ZM28.7523 34.8637C30.2833 34.8637 31.5683 33.5777 31.5683 32.0467C31.5683 30.4887 30.2833 29.2027 28.7523 29.2027C27.2203 29.2027 25.9353 30.4887 25.9353 32.0467C25.9353 33.5777 27.2203 34.8637 28.7523 34.8637ZM14.0953 34.8637C15.6273 34.8637 16.9123 33.5777 16.9123 32.0467C16.9123 30.4887 15.6273 29.2027 14.0953 29.2027C12.5513 29.2027 11.2653 30.4887 11.2653 32.0467C11.2653 33.5777 12.5513 34.8637 14.0953 34.8637Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.298828125 36.203125"
          className={className}
        >
          <path
            d="              M32.7443 21.5877C35.0543 21.5877 36.2993 20.3707 36.2993 18.0877V7.6567C36.2993 5.3727 35.0543 4.1567 32.7443 4.1567H29.2033V2.9937C29.2033 1.0387 28.0543 -0.0003 25.8673 -0.0003H21.3963C19.1953 -0.0003 18.0603 1.0257 18.0603 2.9937V4.1567H14.5193C12.2093 4.1567 10.9653 5.3727 10.9653 7.6567V18.0877C10.9653 20.3707 12.2093 21.5877 14.5193 21.5877ZM20.8903 2.9937C20.8903 2.6247 21.0953 2.4477 21.5333 2.4477H25.7303C26.1683 2.4477 26.3733 2.6247 26.3733 2.9937V4.1567H20.8903ZM34.1383 28.1097C35.3693 28.1097 36.2993 27.2477 36.2993 25.9907C36.2993 24.7327 35.3693 23.8707 34.1383 23.8707H9.9673C9.1053 23.8707 8.6273 23.3927 8.6273 22.5317V7.9977C8.6273 4.9767 6.9453 3.3087 3.9243 3.3087H2.1193C0.9433 3.3087 0.0003 4.2657 0.0003 5.4277C0.0003 6.5897 0.9433 7.5337 2.1193 7.5337H3.0623C3.9243 7.5337 4.4023 8.0117 4.4023 8.8867V23.4197C4.4023 26.4417 6.0843 28.1097 9.1053 28.1097ZM14.7653 18.5937C14.4103 18.5937 14.2183 18.4027 14.2183 18.0877V7.6567C14.2183 7.3417 14.4103 7.1507 14.7653 7.1507H16.1193V18.5937ZM19.1953 18.5937V7.1507H28.0683V18.5937ZM32.4983 18.5937H31.1443V7.1507H32.4983C32.8533 7.1507 33.0453 7.3417 33.0453 7.6567V18.0877C33.0453 18.4027 32.8533 18.5937 32.4983 18.5937ZM29.3673 36.2027C30.9803 36.2027 32.3343 34.8497 32.3343 33.2367C32.3343 31.5957 30.9803 30.2427 29.3673 30.2427C27.7543 30.2427 26.4003 31.5957 26.4003 33.2367C26.4003 34.8497 27.7543 36.2027 29.3673 36.2027ZM14.7113 36.2027C16.3243 36.2027 17.6773 34.8497 17.6773 33.2367C17.6773 31.5957 16.3243 30.2427 14.7113 30.2427C13.0843 30.2427 11.7303 31.5957 11.7303 33.2367C11.7303 34.8497 13.0843 36.2027 14.7113 36.2027Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.11328125 31.732421875"
          className={className}
        >
          <path
            d="              M30.1743 20.6441C32.0473 20.6441 33.0993 19.6461 33.0993 17.8551V6.7671C33.0993 4.9761 32.0473 3.9651 30.1743 3.9651H26.3183V2.8571C26.3183 1.0121 25.2933 0.0001 23.3653 0.0001H18.0333C16.0643 0.0001 15.0663 0.9711 15.0663 2.8571V3.9651H11.2113C9.3383 3.9651 8.2853 4.9761 8.2853 6.7671V17.8551C8.2853 19.6461 9.3383 20.6441 11.2113 20.6441ZM16.5703 2.7751C16.5703 1.9141 17.0623 1.4491 17.9923 1.4491H23.4063C24.3223 1.4491 24.8143 1.9141 24.8143 2.7751V3.9651H16.5703ZM32.2523 24.6911C32.7173 24.6911 33.1133 24.3361 33.1133 23.8441C33.1133 23.3651 32.7173 23.0101 32.2523 23.0101H7.6973C6.4533 23.0101 5.8383 22.3811 5.8383 21.1091V7.3831C5.8383 5.0311 4.7443 3.9511 2.3793 3.9511H0.8473C0.3963 3.9511 0.0003 4.3481 0.0003 4.7991C0.0003 5.2641 0.3963 5.6461 0.8473 5.6461H2.2693C3.5133 5.6461 4.1423 6.2621 4.1423 7.5471V21.2731C4.1423 23.6251 5.2223 24.6911 7.6013 24.6911ZM11.2243 19.1131C10.3223 19.1131 9.8433 18.6481 9.8433 17.8011V6.8221C9.8433 5.9741 10.3223 5.5101 11.2243 5.5101H12.7563V19.1131ZM14.3013 19.1131V5.5101H27.0843V19.1131ZM30.1743 19.1131H28.6423V5.5101H30.1743C31.0623 5.5101 31.5543 5.9741 31.5543 6.8221V17.8011C31.5543 18.6481 31.0623 19.1131 30.1743 19.1131ZM27.3983 31.7321C28.6423 31.7321 29.6953 30.6801 29.6953 29.4351C29.6953 28.1641 28.6423 27.1111 27.3983 27.1111C26.1543 27.1111 25.1013 28.1641 25.1013 29.4351C25.1013 30.6801 26.1543 31.7321 27.3983 31.7321ZM12.7423 31.7321C13.9863 31.7321 15.0393 30.6801 15.0393 29.4351C15.0393 28.1641 13.9863 27.1111 12.7423 27.1111C11.4983 27.1111 10.4453 28.1641 10.4453 29.4351C10.4453 30.6801 11.4983 31.7321 12.7423 31.7321Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.1796875 33.236328125"
          className={className}
        >
          <path
            d="              M30.9533 21.0821C33.0043 21.0821 34.1663 19.9611 34.1663 18.0061V7.0681C34.1663 5.1001 33.0043 3.9921 30.9533 3.9921H27.2893V3.0901C27.2893 1.0941 26.1543 0.0001 24.0763 0.0001H19.2633C17.1313 0.0001 16.0513 1.0531 16.0513 3.0901V3.9921H12.3863C10.3223 3.9921 9.1603 5.1001 9.1603 7.0681V18.0061C9.1603 19.9611 10.3223 21.0821 12.3863 21.0821ZM18.1833 2.9941C18.1833 2.3381 18.5663 1.9821 19.2633 1.9821H24.0623C24.7733 1.9821 25.1423 2.3381 25.1423 2.9941V3.9921H18.1833ZM32.8263 25.9491C33.5643 25.9491 34.1793 25.3751 34.1793 24.6091C34.1793 23.8441 33.5643 23.2691 32.8263 23.2691H8.4633C7.3963 23.2691 6.8363 22.7091 6.8363 21.6291V7.8201C6.8363 5.1681 5.5373 3.8961 2.8713 3.8961H1.3403C0.6013 3.8961 0.0003 4.4981 0.0003 5.2231C0.0003 5.9611 0.6013 6.5621 1.3403 6.5621H2.5433C3.6093 6.5621 4.1563 7.1231 4.1563 8.2171V22.0251C4.1563 24.6781 5.4553 25.9491 8.1353 25.9491ZM12.4553 18.8531C11.8123 18.8531 11.4573 18.5251 11.4573 17.9371V7.1231C11.4573 6.5491 11.8123 6.2211 12.4553 6.2211H13.7953V18.8531ZM16.0373 18.8531V6.2211H27.3023V18.8531ZM30.8853 18.8531H29.5313V6.2211H30.8853C31.5133 6.2211 31.8833 6.5491 31.8833 7.1231V17.9371C31.8833 18.5251 31.5133 18.8531 30.8853 18.8531ZM28.0003 33.2361C29.4353 33.2361 30.6383 32.0331 30.6383 30.6111C30.6383 29.1481 29.4353 27.9591 28.0003 27.9591C26.5643 27.9591 25.3613 29.1481 25.3613 30.6111C25.3613 32.0331 26.5643 33.2361 28.0003 33.2361ZM13.3433 33.2361C14.7793 33.2361 15.9823 32.0331 15.9823 30.6111C15.9823 29.1481 14.7793 27.9591 13.3433 27.9591C11.9083 27.9591 10.7053 29.1481 10.7053 30.6111C10.7053 32.0331 11.9083 33.2361 13.3433 33.2361Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.5234375 32.3203125"
          className={className}
        >
          <path
            d="              M30.3923 20.9043C32.3753 20.9043 33.5233 19.8383 33.5233 17.9652V6.8633C33.5233 5.0042 32.3753 3.9243 30.3923 3.9243H26.6873V3.1172C26.6873 1.0933 25.5803 0.0003 23.5153 0.0003H18.6073C16.4883 0.0003 15.4223 1.0392 15.4223 3.1172V3.9243H11.7303C9.7483 3.9243 8.5993 5.0042 8.5993 6.8633V17.9652C8.5993 19.8383 9.7483 20.9043 11.7303 20.9043ZM17.3493 2.9943C17.3493 2.2422 17.7733 1.8322 18.5663 1.8322H23.5563C24.3493 1.8322 24.7603 2.2422 24.7603 2.9943V3.9243H17.3493ZM32.4163 25.2793C33.0173 25.2793 33.5233 24.7873 33.5233 24.1722C33.5233 23.5563 33.0173 23.0783 32.4163 23.0783H7.9983C6.8633 23.0783 6.2893 22.4903 6.2893 21.3423V7.7523C6.2893 5.2093 5.1133 4.0603 2.5433 4.0603H1.0933C0.5063 4.0603 0.0003 4.5663 0.0003 5.1543C0.0003 5.7563 0.5063 6.2613 1.0933 6.2613H2.3793C3.5133 6.2613 4.0883 6.8493 4.0883 7.9982V21.5883C4.0883 24.1172 5.2633 25.2793 7.8343 25.2793ZM11.7443 18.9222C11.0063 18.9222 10.5953 18.5523 10.5953 17.8833V6.9453C10.5953 6.2892 11.0063 5.9202 11.7443 5.9202H13.0843V18.9222ZM15.0663 18.9222V5.9202H27.0563V18.9222ZM30.3793 18.9222H29.0393V5.9202H30.3793C31.1173 5.9202 31.5273 6.2892 31.5273 6.9453V17.8833C31.5273 18.5523 31.1173 18.9222 30.3793 18.9222ZM27.5763 32.3203C28.9573 32.3203 30.1193 31.1583 30.1193 29.7913C30.1193 28.3963 28.9573 27.2343 27.5763 27.2343C26.2093 27.2343 25.0473 28.3963 25.0473 29.7913C25.0473 31.1583 26.2093 32.3203 27.5763 32.3203ZM12.9203 32.3203C14.3013 32.3203 15.4493 31.1583 15.4493 29.7913C15.4493 28.3963 14.3013 27.2343 12.9203 27.2343C11.5393 27.2343 10.3903 28.3963 10.3903 29.7913C10.3903 31.1583 11.5393 32.3203 12.9203 32.3203Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.671875 33.93359375"
          className={className}
        >
          <path
            d="              M31.3773 21.1919C33.4963 21.1919 34.6723 20.0569 34.6723 18.0199V7.1919C34.6723 5.1539 33.4963 4.0199 31.3773 4.0199H27.7403V3.0629C27.7403 1.0799 26.6053 -0.0001 24.5003 -0.0001H19.7693C17.6233 -0.0001 16.5153 1.0389 16.5153 3.0629V4.0199H12.8923C10.7733 4.0199 9.5843 5.1539 9.5843 7.1919V18.0199C9.5843 20.0569 10.7733 21.1919 12.8923 21.1919ZM18.8263 2.9939C18.8263 2.3929 19.1683 2.0779 19.8103 2.0779H24.4593C25.1013 2.0779 25.4293 2.3929 25.4293 2.9939V4.0199H18.8263ZM33.1273 26.4549C33.9883 26.4549 34.6723 25.8129 34.6723 24.9239C34.6723 24.0489 33.9883 23.4059 33.1273 23.4059H8.8183C7.7933 23.4059 7.2603 22.8589 7.2603 21.8339V7.8479C7.2603 5.1129 5.8793 3.7459 3.1173 3.7459H1.5173C0.6833 3.7459 0.0003 4.4299 0.0003 5.2639C0.0003 6.0979 0.6833 6.7949 1.5173 6.7949H2.6663C3.6773 6.7949 4.2243 7.3279 4.2243 8.3669V22.3399C4.2243 25.0879 5.6053 26.4549 8.3673 26.4549ZM13.0023 18.7849C12.4273 18.7849 12.1133 18.4839 12.1133 17.9649V7.2459C12.1133 6.7269 12.4273 6.4259 13.0023 6.4259H14.3423V18.7849ZM16.7753 18.7849V6.4259H27.4803V18.7849ZM31.2673 18.7849H29.9143V6.4259H31.2673C31.8283 6.4259 32.1563 6.7269 32.1563 7.2459V17.9649C32.1563 18.4839 31.8283 18.7849 31.2673 18.7849ZM28.3283 33.9339C29.8043 33.9339 31.0353 32.7029 31.0353 31.2269C31.0353 29.7229 29.8043 28.4919 28.3283 28.4919C26.8513 28.4919 25.6073 29.7229 25.6073 31.2269C25.6073 32.7029 26.8513 33.9339 28.3283 33.9339ZM13.6723 33.9339C15.1483 33.9339 16.3793 32.7029 16.3793 31.2269C16.3793 29.7229 15.1483 28.4919 13.6723 28.4919C12.1813 28.4919 10.9513 29.7229 10.9513 31.2269C10.9513 32.7029 12.1813 33.9339 13.6723 33.9339Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.56640625 30.953125"
          className={className}
        >
          <path
            d="              M29.8863 20.2887C31.6233 20.2887 32.5523 19.3727 32.5523 17.6777V6.6177C32.5523 4.9217 31.6233 4.0057 29.8863 4.0057H25.8263V2.4887C25.8263 0.8747 24.9103 -0.0003 23.1603 -0.0003H17.2673C15.5043 -0.0003 14.5883 0.8617 14.5883 2.4887V4.0057H10.5273C8.7913 4.0057 7.8613 4.9217 7.8613 6.6177V17.6777C7.8613 19.3727 8.7913 20.2887 10.5273 20.2887ZM15.5453 2.4607C15.5453 1.4627 16.1333 0.9437 17.2263 0.9437H23.2013C24.3083 0.9437 24.8693 1.4627 24.8693 2.4607V4.0057H15.5453ZM32.0473 23.9117C32.3203 23.9117 32.5663 23.7207 32.5663 23.4067C32.5663 23.0777 32.3203 22.9007 32.0473 22.9007H7.3013C5.8923 22.9007 5.2223 22.2307 5.2223 20.7947V6.8767C5.2223 4.7717 4.2523 3.8007 2.1463 3.8007H0.5063C0.2463 3.8007 0.0003 4.0467 0.0003 4.3207C0.0003 4.5797 0.2463 4.8267 0.5063 4.8267H2.1193C3.5273 4.8267 4.2113 5.4827 4.2113 6.9177V20.8497C4.2113 22.9547 5.1683 23.9117 7.2873 23.9117ZM10.5273 19.3457C9.4203 19.3457 8.8323 18.7577 8.8323 17.6507V6.6307C8.8323 5.5367 9.4203 4.9497 10.5273 4.9497H12.3183V19.3457ZM13.2893 19.3457V4.9497H27.1383V19.3457ZM29.8863 19.3457H28.0953V4.9497H29.8863C31.0083 4.9497 31.5823 5.5367 31.5823 6.6307V17.6507C31.5823 18.7577 31.0083 19.3457 29.8863 19.3457ZM27.1663 30.9527C28.2323 30.9527 29.1483 30.0237 29.1483 28.9567C29.1483 27.8637 28.2323 26.9477 27.1663 26.9477C26.0863 26.9477 25.1703 27.8637 25.1703 28.9567C25.1703 30.0237 26.0863 30.9527 27.1663 30.9527ZM12.4963 30.9527C13.5763 30.9527 14.4923 30.0237 14.4923 28.9567C14.4923 27.8637 13.5763 26.9477 12.4963 26.9477C11.4293 26.9477 10.5133 27.8637 10.5133 28.9567C10.5133 30.0237 11.4293 30.9527 12.4963 30.9527Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.29296875 30.54296875"
          className={className}
        >
          <path
            d="              M29.7363 20.1116C31.4043 20.1116 32.2793 19.2366 32.2793 17.5816V6.5356C32.2793 4.8806 31.4043 4.0196 29.7363 4.0196H25.5803V2.3106C25.5803 0.7926 24.7053 -0.0004 23.0643 -0.0004H16.8713C15.2173 -0.0004 14.3423 0.7926 14.3423 2.3106V4.0196H10.1853C8.5043 4.0196 7.6423 4.8806 7.6423 6.5356V17.5816C7.6423 19.2366 8.5043 20.1116 10.1853 20.1116ZM15.0113 2.3106C15.0113 1.2306 15.6543 0.6696 16.8433 0.6696H23.0923C24.2953 0.6696 24.9103 1.2306 24.9103 2.3106V4.0196H15.0113ZM31.9373 23.5016C32.1153 23.5016 32.2933 23.4066 32.2933 23.1736C32.2933 22.9416 32.1153 22.8316 31.9373 22.8316H7.1093C5.6193 22.8316 4.9083 22.1626 4.9083 20.6306V6.6036C4.9083 4.6346 4.0063 3.7326 2.0373 3.7326H0.3283C0.1643 3.7326 0.0003 3.8966 0.0003 4.0606C0.0003 4.2246 0.1643 4.4026 0.3283 4.4026H2.0373C3.5273 4.4026 4.2383 5.0856 4.2383 6.6036V20.6306C4.2383 22.5996 5.1403 23.5016 7.1233 23.5016ZM10.1853 19.4686C8.9553 19.4686 8.3123 18.8126 8.3123 17.5816V6.5356C8.3123 5.3046 8.9553 4.6486 10.1853 4.6486H12.0863V19.4686ZM12.7693 19.4686V4.6486H27.1523V19.4686ZM29.7363 19.4686H27.8223V4.6486H29.7363C30.9673 4.6486 31.6093 5.3046 31.6093 6.5356V17.5816C31.6093 18.8126 30.9673 19.4686 29.7363 19.4686ZM27.0433 30.5426C28.0273 30.5426 28.8753 29.6956 28.8753 28.6976C28.8753 27.6996 28.0273 26.8516 27.0433 26.8516C26.0453 26.8516 25.1973 27.6996 25.1973 28.6976C25.1973 29.6956 26.0453 30.5426 27.0433 30.5426ZM12.3733 30.5426C13.3713 30.5426 14.2183 29.6956 14.2183 28.6976C14.2183 27.6996 13.3713 26.8516 12.3733 26.8516C11.3883 26.8516 10.5413 27.6996 10.5413 28.6976C10.5413 29.6956 11.3883 30.5426 12.3733 30.5426Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
