import Image from "next/image";
import React from "react";
import first from "../assets/Image01.png";
import second from "../assets/Image02.png";
import fourth from "../assets/Image04.png";
import third from "../assets/Image03.png";
import fifth from "../assets/Image05.png";

export const Flex = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full h-full px-0 sm:flex-row sm:px-20 ">
        <div className="flex flex-col mr-5">
          <div className="flex justify-between mb-10">
            <div className="flex flex-col">
              <div className="w-[648px] mr-5 mb-2 ">
                Lorem ipsum dolor sit amet consectetur. Risus cursus nibh
                elementum ornare a aliquet ac. Feugiat scelerisque ultrices
                tempor facilisi tempus risus nunc. Proin quis morbi posuere nisl
                etiam scelerisque. Proin pretium gravida semper ut erat nisi.
                Pulvinar ac mattis porta amet et. Nisl urna non fames felis leo.
                Vitae pulvinar sed viverra sit pretium lorem elementum. Iaculis
                sit maecenas sodales mi convallis justo aliquam. Tincidunt
                semper ut ornare vivamus lectus.
              </div>
              <div className="flex">
                <div className="w-[424px] mr-5 mb-2 ">
                  Lorem ipsum dolor sit amet consectetur. Turpis integer massa
                  consectetur sed enim quis viverra. Vestibulum eu nibh dolor
                  semper. Nisl feugiat quis nec odio pulvinar feugiat velit.
                  Nulla massa sit morbi morbi. Tortor viverra eget lacus
                  feugiat. Tempus vitae vitae orci at ultrices nisi diam
                  faucibus. Ultricies in cursus volutpat aliquam turpis urna in
                  sed. Hendrerit arcu sit lectus adipiscing egestas semper nunc.
                  Ante consectetur id congue pulvinar libero tristique et orci.
                  Platea convallis dictum dui augue. Tincidunt mattis urna sit
                  semper sed duis feugiat mi.
                </div>
                <div>
                  <Image src={fourth} alt="image" />
                </div>
              </div>
              <div className="w-[648px] h-[108px] mr-5 ">
                Lorem ipsum dolor sit amet consectetur. Tincidunt at cras tortor
                non volutpat quisque facilisis. Ultricies consequat sed vitae
                ac. Nisl eu nam id lectus tellus sit egestas. Orci iaculis et
                vehicula nisi facilisi neque lorem. In vulputate feugiat
                lobortis eros viverra. Turpis viverra vel fames enim tortor.
                Scelerisque dictumst aliquam gravida eget ut accumsan. A est dis
                platea vitae blandit quis. Ultricies ac at urna vel morbi diam.
                Donec ut sit sit et. Etiam cum faucibus eu elementum ut
                fermentum in cursus.
              </div>
            </div>
            <div>
              <div className="mb-10 w-[200px] h-[200px]">
                <Image src={second} alt="image" />
              </div>
              <div className=" w-[200px] h-[200px]">
                <Image src={third} alt="image" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-[648px]">
            Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum
            ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi
            tempus risus nunc. Proin quis morbi posuere nisl etiam scelerisque.
            Proin pretium gravida semper ut erat nisi. Pulvinar ac mattis porta
            amet et. Nisl urna non fames felis leo. Vitae pulvinar sed viverra .
          </div>
          <div className="flex mt-5 h-[200]">
            <Image src={fifth} width={200} height={200} alt="image" />
            <div className="ml-5 ">
              Lorem ipsum dolor sit amet consectetur. Turpis integer massa
              consectetur sed enim quis viverra. Vestibulum eu nibh dolor
              semper. Nisl feugiat quis nec odio pulvinar feugiat velit. Nulla
              massa sit morbi morbi. Tortor viverra eget lacus feugiat. Tempus
              vitae vitae orci at ultrices nisi diam faucibus. Ultricies in
              cursus volutpat aliquam turpis urna in sed. Hendrerit arcu sit
              lectus adipiscing egestas semper nunc. Ante consectetur id congue
              pulvinar libero tristique et orci.
            </div>
          </div>
          <div className="flex my-5">
            <Image src={first} width={200} height={200} alt="image" />
            <div className="ml-5">
              Lorem ipsum dolor sit amet consectetur. Tincidunt at cras tortor
              non volutpat quisque facilisis. Ultricies consequat sed vitae ac.
              Nisl eu nam id lectus tellus sit egestas. Orci iaculis et vehicula
              nisi facilisi neque lorem. In vulputate feugiat lobortis eros
              viverra. Turpis viverra vel fames enim tortor. Scelerisque
              dictumst aliquam gravida eget ut accumsan. A est dis platea vitae
              blandit quis. Ultricies ac at urna vel morbi diam.
            </div>
          </div>
        </div>
      </div>
      <div className="px-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        praesentium veritatis dolor veniam laborum doloribus aut corporis quia
        quam adipisci molestiae, sapiente totam consequuntur accusantium illo
        maiores saepe ex sed recusandae quis quisquam. Cum soluta rerum error
        quos quidem repudiandae beatae quasi. Fuga voluptates porro ipsa ad iste
        nobis numquam laboriosam. Repellat error expedita pariatur modi.
        Explicabo harum sapiente quis dolorem excepturi nemo delectus omnis
        tempora, debitis odit deleniti eum. Eius labore dolorum et aperiam, odit
        hic voluptatibus sapiente facilis ex recusandae sunt delectus
        consequuntur molestiae, sit nam voluptate quia soluta, ut eos quisquam.
        Labore fugit consectetur temporibus laborum similique.
      </div>
    </div>
  );
};
