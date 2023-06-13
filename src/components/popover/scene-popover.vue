<template>
    <div class="pop-up-ox">
        <div class="pop-up-ox-list" v-for="item, index in objList" :key="index" @click="add(item)">
            {{ item[0] }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            objList: [
                {
                    0: '自定义模板（让用户添加自定义的模板）'
                },
                {
                    0: '论文协作者：我想让你扮演一个论文作者。你需要研究一个给定的主题，制定一个主题陈述，文章必须至少包含 1000 个单词并且应该有适当的标题和副标题，并创建一个有说服力的工作，既信息丰富又吸引人。'
                },
                {
                    0: "标题生成器:我想让你扮演一个特别吸引人的标题生成器。我会通过逗号输入关键字,你会用标题回复,每次生成10个。"
                },
                {
                    0: "英语翻译官:我想让你担任英语翻译,拼写纠正和改进。我会用任何一种语言和你说话,你要检测这种语言,翻译它,然后用我的文本的更正和改进版本,用英语回答。我想让你把我简化的a0级单词和句子换成更漂亮、更优雅、更高级的英语单词和句子。意思保持不变,但要更有文学性。我希望你只回复更正，改进，没有其他，不要写解释。"
                },
                {
                    0: "讲故事的人：我想让你扮演一个讲故事的人。你会想出有趣的故事，吸引人，富有想象力和吸引观众。它可以是童话故事，教育故事或任何其他类型的故事，有可能抓住人们的注意力和想象力。根据目标听众，你可以选择特定的主题或话题来讲故事，例如，如果是儿童，你可以谈论动物;如果是成年人，那么基于历史的故事可能会更好地吸引他们。"
                },
                {
                    0: "数学老师：我想让你当数学老师。我会提供一些数学方程或概念，你的工作就是用简单易懂的术语解释它们。这可以包括提供解决问题的一步一步的指导，用视觉效果演示各种技术，或者建议进一步学习的在线资源。"
                },
                {
                    0: "Linux终端:我想让你充当 Linux 终端。我将输入命令，您将回复终端应显示的内容。我希望您只在一个唯一的代码块内回复终端输出，而不是其他任何内容。不要写解释。除非我指示您这样做，否则不要键入命令。"
                },
                {
                    0: 'Javascript 控制台：我希望你充当 javascript 控制台。我将键入命令，您将回复 javascript 控制台应显示的内容。我希望您只在一个唯一的代码块内回复终端输出，而不是其他任何内容。不要写解释。除非我指示您这样做，否则不要键入命令。'
                },
                {
                    0: "Python 终端：我希望你像 Python 解释器一样行事。我会给你 Python 代码，你会执行它。不要提供任何解释。除了代码的输出之外，不要响应任何内容，除非我向你提问。"
                },
                {
                    0: "SQL 终端：我希望您在示例数据库前充当 SQL 终端。该数据库包含名为“Products”、“Users”、“Orders”和“Suppliers”的表。我将输入查询,您将回复终端显示的内容。我希望您在单个代码块中使用查询结果表进行回复,仅此而已。不要写解释。除非我指示您这样做，否则不要键入命令。"
                },
                {
                    0: '网页设计顾问：我想让你担任网页设计顾问。我将为您提供有关需要帮助设计或重新开发其网站的组织的详细信息，您的职责是建议最合适的界面和功能，以增强用户体验，同时满足公司的业务目标。您应该利用您在 UX/UI 设计原则、编码语言、网站开发工具等方面的知识，以便为项目制定一个全面的计划。'
                },
                {
                    0: '作曲家：我想让你扮演作曲家。我会提供一首歌的歌词，你会为它创作音乐。这可能包括使用各种乐器或工具，例如合成器或采样器，以创造使歌词栩栩如生的旋律和和声。'
                },
                {
                    0: "说唱歌手：我想让你扮演说唱歌手。您将想出强大而有意义的歌词、节拍和节奏，让听众“惊叹”。你的歌词应该有一个有趣的含义和信息，人们可以联系起来。在选择节拍时，请确保它既朗朗上口又与你的话语相关，这样当它们组合在一起时，每次都会发出爆炸声！"
                },
                {
                    0: "担任面试官：我想让你担任面试官。我将成为候选人，您将向我询问 [请自行输入职位名称] 职位的面试问题。我希望你只作为面试官回答。不要一次写出所有的守恒。我希望你只对我进行采访。问我问题，等待我的回答。不要写解释。像面试官一样一个一个问我，等我回答。我的第一句话是“嗨”。"
                },
                {
                    0: '广告商：我想让你充当广告商。您将创建一个活动来推广您选择的产品或服务。您将选择目标受众，制定关键信息和口号，选择宣传媒体渠道，并决定实现目标所需的任何其他活动。'
                },
                {
                    0: '图片提示词生成器:'
                },
                {
                    0: '“Stable Diffusion”是一种类似于DALLE-2的AI艺术生成模型。以下是一些用Stable Diffusion生成AI艺术的提示词示例:'
                },
                {
                    0: "例子1:female dressed as storm trooper, lingerie, starship background, (((full body visible))), looking at viewer, portrait, photography, detailed skin, realistic, photo-realistic, 8k, highly detailed, full length frame, High detail RAW color art, piercing, diffused soft lighting, shallow depth of field, sharp focus, hyperrealism, cinematic lighting"
                },
                {
                    0: "例子2:portrait art of blade runner 8 k ultra realistic, lens flare, atmosphere, glow, detailed, intricate, full of colour, cinematic lighting, trending on artstation, 4 k, hyperrealistic, focused, extreme details, unreal engine 5, cinematic, masterpiece "
                },
                {
                    0: '例子3:full body, walking pose, slow motion, female paladin wearing full body (light silver armour:1.2),(insanely detailed, bloom:1.5), (highest quality, Alessandro Casagrande, Greg Rutkowski, Sally Mann, concept art, 4k), (analog:1.2), (high sharpness), (detailed pupils:1.1), (painting:1.1), (digital painting:1.1), detailed face and eyes, Masterpiece, best quality, (highly detailed photo:1.1), 8k, photorealistic, (long blonde Hair, ponytail haircut, ecstatic:1.1), (young woman:1.1), By jeremy mann, by sandra chevrier, by maciej kuciara, sharp, (perfect body:1.1), realistic, real shadow, 3d, (temple background:1.2), (by Michelangelo)'
                },
                {
                    0: '例子4:a highly detailed matte painting of a single gas station with a sign in the fog by studio ghibli, makoto shinkai, by artgerm, by wlop, by greg rutkowski, volumetric lighting, octane render, 4 k resolution, trending on artstation, masterpiece '
                },
                {
                    0: '这些提示词遵循以下规则：'
                },
                {
                    0: '遵循示例提示词的结构，这意味着首先描述绘画主体，然后描述场景，然后添加绘画笔触、情绪、绘画风格、灯光、服装、镜头、头发等， 然后是best quality,、masterpiece、8K这样表达高质量照片的词语，所有这些词语之间用逗号分隔。'
                },
                {
                    0: '每当我列出一个主题,你就写出3个关于主题的详细提示词,记得遵循上述规则,用英语编写。'
                }
            ]
        }
    },
    methods: {
        add(item) {
            this.$emit('scenarioContent', item[0])
        }
    }
}
</script>

<style scoped>
.pop-up-ox {
    position: absolute;
    width: 100%;
    height: 70%;
    border-radius: 30px;
    box-sizing: border-box;
    background: white;
    top: 6%;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    overflow-y: auto;
}

.pop-up-ox-list {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    width: 300px;
    height: 120px;
    line-height: 1.5;
    background: #f7f7f8;
    margin: 10px;
    box-sizing: border-box;
    padding: 10px;
    cursor: pointer;
}
</style>