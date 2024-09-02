import { IconProps } from "../../types"

export default function StudentdeskIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.037109375 36.77734375"
          className={className}
        >
          <path
            d="              M9.5977 9.98H20.8227C22.7777 9.98 23.6797 9.092 23.6797 7.178V2.775C23.6797 0.889 22.7777 0 20.8227 0H9.5977C7.6567 0 6.7267 0.889 6.7267 2.775V7.178C6.7267 9.092 7.6567 9.98 9.5977 9.98ZM6.8227 36.777C7.9847 36.777 8.6137 36.299 8.9137 35.164L9.9397 31.268H20.0427L21.0687 35.164C21.3687 36.299 22.0117 36.777 23.1467 36.777C24.3907 36.777 25.1697 35.902 25.1697 34.727C25.1697 34.481 25.1427 34.221 25.0747 33.961L23.0507 26.195H24.2817C25.4977 26.195 26.4417 25.143 26.4417 23.98C26.4417 22.75 25.5117 21.752 24.2947 21.752H8.3947C6.5897 21.752 5.7287 20.918 5.7287 19.182V16.488H6.5077V17.336C6.5077 19.018 7.5197 20.016 9.2557 20.016H20.9867C22.7227 20.016 23.7347 19.018 23.7347 17.336V16.488H27.9047C29.1077 16.488 30.0367 15.463 30.0367 14.301C30.0367 13.111 29.1207 12.127 27.9177 12.127H2.1057C0.9027 12.127 -0.0003 13.111 -0.0003 14.301C-0.0003 15.463 0.9297 16.488 2.1187 16.488H2.6387V22.586C2.6387 24.842 4.0197 26.195 6.3027 26.195H6.9317L4.9087 33.961C4.8397 34.221 4.7987 34.453 4.7987 34.699C4.7987 35.889 5.5647 36.777 6.8227 36.777ZM10.9237 27.617L11.2927 26.195H18.6897L19.0587 27.617Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.1640625 33.5234375"
          className={className}
        >
          <path
            d="              M9.1057 9.242H19.3457C21.1227 9.242 21.9707 8.422 21.9707 6.686V2.557C21.9707 0.82 21.1227 0 19.3457 0H9.1057C7.3277 0 6.4807 0.82 6.4807 2.557V6.686C6.4807 8.422 7.3277 9.242 9.1057 9.242ZM5.7427 33.523C6.6307 33.523 7.0817 33.113 7.3147 32.252L8.3947 28.137H19.7837L20.8767 32.252C21.0957 33.113 21.5747 33.523 22.4357 33.523C23.4067 33.523 23.9807 32.895 23.9807 31.992C23.9807 31.814 23.9667 31.609 23.8987 31.404L21.8067 23.434H22.8047C23.8577 23.434 24.6637 22.613 24.6637 21.643C24.6637 20.617 23.9117 19.838 22.8457 19.838H7.0957C5.6877 19.838 4.9627 19.154 4.9627 17.787V14.574H6.3987V15.504C6.3987 17.117 7.2867 17.992 8.9547 17.992H19.4007C21.0687 17.992 21.9567 17.117 21.9567 15.504V14.574H26.4957C27.4667 14.574 28.1637 13.85 28.1637 12.961C28.1637 12.031 27.4807 11.334 26.5237 11.334H1.5997C0.6697 11.334 -0.0003 12.031 -0.0003 12.961C-0.0003 13.85 0.6837 14.574 1.6267 14.574H2.3517V20.18C2.3517 22.217 3.5957 23.434 5.6467 23.434H6.3707L4.2797 31.404C4.2247 31.596 4.1977 31.787 4.1977 31.992C4.1977 32.867 4.7307 33.523 5.7427 33.523ZM9.1737 25.238L9.6527 23.434H18.5257L19.0037 25.238Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.1484375 35.24609375"
          className={className}
        >
          <path
            d="              M9.3657 9.6383H20.1247C21.9977 9.6383 22.8727 8.7773 22.8727 6.9453V2.6663C22.8727 0.8613 21.9977 0.0003 20.1247 0.0003H9.3657C7.5057 0.0003 6.6177 0.8613 6.6177 2.6663V6.9453C6.6177 8.7773 7.5057 9.6383 9.3657 9.6383ZM6.3167 35.2463C7.3417 35.2463 7.8887 34.7953 8.1617 33.7973L9.2147 29.7913H19.9197L20.9727 33.7973C21.2457 34.7953 21.8067 35.2463 22.8187 35.2463C23.9257 35.2463 24.6097 34.4803 24.6097 33.4413C24.6097 33.2223 24.5817 32.9903 24.5277 32.7573L22.4627 24.8823H23.5837C24.7187 24.8823 25.6077 23.9533 25.6077 22.8733C25.6077 21.7383 24.7597 20.8493 23.6117 20.8493H7.7797C6.1657 20.8493 5.3727 20.0843 5.3727 18.5253V15.5863H6.4527V16.4743C6.4527 18.1293 7.4097 19.0583 9.1057 19.0583H20.2347C21.9437 19.0583 22.8867 18.1293 22.8867 16.4743V15.5863H27.2477C28.3277 15.5863 29.1487 14.6973 29.1487 13.6723C29.1487 12.5913 28.3417 11.7443 27.2617 11.7443H1.8597C0.7927 11.7443 -0.0003 12.6053 -0.0003 13.6723C-0.0003 14.6973 0.8067 15.5863 1.8867 15.5863H2.5017V21.4513C2.5017 23.5973 3.8147 24.8823 5.9887 24.8823H6.6717L4.6077 32.7573C4.5527 32.9903 4.5117 33.1953 4.5117 33.4143C4.5117 34.4663 5.1677 35.2463 6.3167 35.2463ZM10.1037 26.4963L10.5137 24.8823H18.6077L19.0317 26.4963Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.908203125 29.4765625"
          className={className}
        >
          <path
            d="              M8.4357 8.3668H17.5957C19.1677 8.3668 19.9337 7.6428 19.9337 6.0978V2.2828C19.9337 0.7248 19.1677 -0.0002 17.5957 -0.0002H8.4357C6.8637 -0.0002 6.0837 0.7248 6.0837 2.2828V6.0978C6.0837 7.6428 6.8637 8.3668 8.4357 8.3668ZM4.4707 29.4768C4.9497 29.4768 5.1547 29.2168 5.2777 28.7788L6.4117 24.4728H19.7287L20.8637 28.7788C20.9867 29.2168 21.2187 29.4768 21.6697 29.4768C22.2027 29.4768 22.4907 29.1758 22.4907 28.7108C22.4907 28.6148 22.4907 28.5058 22.4497 28.3828L20.2347 20.0698H21.3557C21.9977 20.0698 22.4907 19.6468 22.4907 19.0718C22.4907 18.4438 22.0527 18.0328 21.3967 18.0328H5.7287C4.4437 18.0328 3.7867 17.4178 3.7867 16.1598V12.2908H6.2617V13.5628C6.2617 15.0798 7.0137 15.7908 8.5587 15.7908H17.4727C19.0177 15.7908 19.7697 15.0798 19.7697 13.5628V12.2908H25.0057C25.5527 12.2908 25.9087 11.9628 25.9087 11.4848C25.9087 10.9788 25.5667 10.6638 25.0467 10.6638H0.8207C0.3277 10.6638 -0.0003 10.9918 -0.0003 11.4848C-0.0003 11.9628 0.3417 12.2908 0.8617 12.2908H2.1597V17.0758C2.1597 18.9898 3.2677 20.0698 5.1817 20.0698H5.9067L3.6917 28.3828C3.6637 28.4918 3.6507 28.6018 3.6507 28.7108C3.6507 29.1618 3.8967 29.4768 4.4707 29.4768ZM6.8637 22.8318L7.5877 20.0698H18.5527L19.2777 22.8318Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.9609375 31.431640625"
          className={className}
        >
          <path
            d="              M8.7777 8.7636H18.4027C20.0707 8.7636 20.8637 7.9846 20.8637 6.3576V2.3926C20.8637 0.7656 20.0707 -0.0004 18.4027 -0.0004H8.7777C7.1097 -0.0004 6.3027 0.7656 6.3027 2.3926V6.3576C6.3027 7.9846 7.1097 8.7636 8.7777 8.7636ZM5.0447 31.4316C5.7697 31.4316 6.0977 31.0626 6.2757 30.3786L7.4097 26.1136H19.6187L20.7537 30.3786C20.9317 31.0626 21.2867 31.4316 21.9847 31.4316C22.7777 31.4316 23.2287 30.9396 23.2287 30.2426C23.2287 30.0916 23.2017 29.9276 23.1597 29.7496L20.9997 21.6426H21.8617C22.8187 21.6426 23.5297 20.9866 23.5297 20.1386C23.5297 19.2226 22.8867 18.6076 21.9297 18.6076H6.2617C5.0997 18.6076 4.4567 18.0196 4.4567 16.8846V13.3436H6.3297V14.3146C6.3297 15.9006 7.1367 16.6796 8.7637 16.6796H18.3887C20.0017 16.6796 20.8087 15.9006 20.8087 14.3146V13.3436H25.5937C26.4137 13.3436 26.9607 12.8106 26.9607 12.0856C26.9607 11.3336 26.4277 10.8146 25.6347 10.8146H1.2577C0.5197 10.8146 -0.0003 11.3336 -0.0003 12.0856C-0.0003 12.8106 0.5337 13.3436 1.3267 13.3436H2.1737V18.6346C2.1737 20.5216 3.3357 21.6426 5.2227 21.6426H6.0297L3.8687 29.7496C3.8417 29.9146 3.8007 30.0646 3.8007 30.2426C3.8007 30.9256 4.1977 31.4316 5.0447 31.4316ZM8.0527 23.7066L8.5997 21.6426H18.4297L18.9767 23.7066Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.291015625 30.26953125"
          className={className}
        >
          <path
            d="              M8.5997 8.4903H17.8687C19.4687 8.4903 20.2477 7.7523 20.2477 6.1793V2.3103C20.2477 0.7383 19.4687 0.0003 17.8687 0.0003H8.5997C6.9867 0.0003 6.2207 0.7383 6.2207 2.3103V6.1793C6.2207 7.7523 6.9867 8.4903 8.5997 8.4903ZM4.6487 30.2693C5.2907 30.2693 5.5507 29.9143 5.7017 29.3263L6.8497 24.9783H19.5237L20.6717 29.3263C20.8357 29.9143 21.1367 30.2693 21.7247 30.2693C22.4357 30.2693 22.7907 29.8593 22.7907 29.2573C22.7907 29.1213 22.7777 28.9843 22.7367 28.8343L20.5487 20.6443H21.3417C22.2307 20.6443 22.9007 20.0843 22.9007 19.3043C22.9007 18.4573 22.2987 17.9103 21.4097 17.9103H5.7967C4.7717 17.9103 4.1837 17.3773 4.1837 16.3923V12.6463H6.2887V13.6583C6.2887 15.2163 7.0547 15.9413 8.6547 15.9413H17.8147C19.4007 15.9413 20.1657 15.2163 20.1657 13.6583V12.6463H25.0877C25.8267 12.6463 26.2907 12.2363 26.2907 11.5933C26.2907 10.9373 25.8397 10.5273 25.1427 10.5273H1.0797C0.4237 10.5273 -0.0003 10.9513 -0.0003 11.5933C-0.0003 12.2363 0.4517 12.6463 1.1487 12.6463H2.0647V17.7733C2.0647 19.5783 3.1717 20.6443 4.9767 20.6443H5.8247L3.6507 28.8343C3.6097 28.9703 3.5817 29.0933 3.5817 29.2713C3.5817 29.8323 3.8967 30.2693 4.6487 30.2693ZM7.4237 22.8453L7.9977 20.6443H18.3747L18.9497 22.8453Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.48046875 32.333984375"
          className={className}
        >
          <path
            d="              M8.9137 8.9691H18.8127C20.5217 8.9691 21.3417 8.1761 21.3417 6.5081V2.4611C21.3417 0.7931 20.5217 0.0001 18.8127 0.0001H8.9137C7.2047 0.0001 6.3847 0.7931 6.3847 2.4611V6.5081C6.3847 8.1761 7.2047 8.9691 8.9137 8.9691ZM5.3457 32.3341C6.1387 32.3341 6.5217 31.9511 6.7267 31.1851L7.8337 26.9881H19.6877L20.7947 31.1851C20.9997 31.9511 21.4097 32.3341 22.1757 32.3341C23.0507 32.3341 23.5567 31.7871 23.5567 30.9941C23.5567 30.8301 23.5297 30.6521 23.4747 30.4611L21.3557 22.4081H22.2717C23.2697 22.4081 24.0217 21.6971 24.0217 20.7951C24.0217 19.8241 23.3247 19.1411 22.3267 19.1411H6.6307C5.3597 19.1411 4.6757 18.5121 4.6757 17.2811V13.8771H6.3577V14.8341C6.3577 16.4201 7.2047 17.2401 8.8457 17.2401H18.8267C20.4667 17.2401 21.3007 16.4201 21.3007 14.8341V13.8771H25.9907C26.8657 13.8771 27.4807 13.2621 27.4807 12.4551C27.4807 11.6351 26.8787 11.0331 26.0177 11.0331H1.4087C0.5747 11.0331 -0.0003 11.6351 -0.0003 12.4551C-0.0003 13.2621 0.6017 13.8771 1.4497 13.8771H2.2557V19.3051C2.2557 21.2461 3.4457 22.4081 5.4007 22.4081H6.1797L4.0467 30.4611C4.0057 30.6391 3.9787 30.8031 3.9787 30.9941C3.9787 31.7601 4.4297 32.3341 5.3457 32.3341ZM8.5447 24.3631L9.0507 22.4081H18.4707L18.9907 24.3631Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.416015625 28.4375"
          className={className}
        >
          <path
            d="              M8.2307 8.2163H17.2267C18.7717 8.2163 19.5237 7.5063 19.5237 5.9883V2.2423C19.5237 0.7113 18.7717 0.0003 17.2267 0.0003H8.2307C6.6857 0.0003 5.9197 0.7113 5.9197 2.2423V5.9883C5.9197 7.5063 6.6857 8.2163 8.2307 8.2163ZM4.2247 28.4373C4.4847 28.4373 4.6347 28.3003 4.7027 28.0683L5.8377 23.8163H19.9887L21.1227 28.0683C21.1777 28.3003 21.3417 28.4373 21.5877 28.4373C21.9027 28.4373 22.1077 28.2733 22.1077 27.9863C22.1077 27.9453 22.0937 27.8903 22.0797 27.7953L19.7967 19.3183H21.3687C21.6977 19.3183 21.9437 19.0863 21.9437 18.7573C21.9437 18.4293 21.7107 18.1973 21.3827 18.1973H5.6327C4.0057 18.1973 3.2677 17.4723 3.2677 15.8593V11.8123H6.2347V13.4393C6.2347 14.9023 6.9457 15.5863 8.4357 15.5863H17.0217C18.5117 15.5863 19.2227 14.9023 19.2227 13.4393V11.8123H24.9097C25.2107 11.8123 25.4157 11.6213 25.4157 11.3343C25.4157 11.0333 25.2107 10.8413 24.9237 10.8413H0.4787C0.2047 10.8413 -0.0003 11.0473 -0.0003 11.3343C-0.0003 11.6213 0.2047 11.8123 0.4927 11.8123H2.2967V16.1603C2.2967 18.2243 3.3767 19.3183 5.4547 19.3183H6.0157L3.7457 27.7953C3.7187 27.8773 3.7187 27.9313 3.7187 27.9863C3.7187 28.2733 3.9097 28.4373 4.2247 28.4373ZM6.1117 22.8183L7.0407 19.3183H18.7717L19.7147 22.8183Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.15625 27.904296875"
          className={className}
        >
          <path
            d="              M8.1207 8.1349H17.0347C18.5667 8.1349 19.3187 7.4239 19.3187 5.9199V2.2009C19.3187 0.6969 18.5667 -0.0001 17.0347 -0.0001H8.1207C6.5897 -0.0001 5.8377 0.6969 5.8377 2.2009V5.9199C5.8377 7.4239 6.5897 8.1349 8.1207 8.1349ZM4.1157 27.9039C4.2517 27.9039 4.3747 27.8219 4.4027 27.6989L5.5367 23.4749H20.1117L21.2457 27.6989C21.2867 27.8219 21.3967 27.9039 21.5467 27.9039C21.7517 27.9039 21.9027 27.8089 21.9027 27.6039C21.9027 27.5899 21.9027 27.5629 21.8887 27.4939L19.5777 18.9359H21.3827C21.5337 18.9359 21.6697 18.7849 21.6697 18.6079C21.6697 18.4159 21.5337 18.2659 21.3827 18.2659H5.5777C3.7867 18.2659 2.9937 17.4999 2.9937 15.7089V11.5669H6.2067V13.3709C6.2067 14.8069 6.9047 15.4769 8.3677 15.4769H16.7887C18.2517 15.4769 18.9497 14.8069 18.9497 13.3709V11.5669H24.8687C25.0337 11.5669 25.1567 11.4299 25.1567 11.2379C25.1567 11.0609 25.0337 10.9239 24.8557 10.9239H0.3007C0.1367 10.9239 -0.0003 11.0609 -0.0003 11.2379C-0.0003 11.4299 0.1367 11.5669 0.3007 11.5669H2.3657V15.6819C2.3657 17.8279 3.4457 18.9359 5.5917 18.9359H6.0837L3.7737 27.4939C3.7597 27.5629 3.7597 27.5899 3.7597 27.6039C3.7597 27.8089 3.9097 27.9039 4.1157 27.9039ZM5.7287 22.8049L6.7677 18.9359H18.8947L19.9337 22.8049Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}