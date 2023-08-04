<template>
    <div class="instructions">
        <el-dialog v-model="isstrate" title="用户使用说明书" width="72%" center>
            <h1>平台介绍</h1>
            <div>
                欢迎使用Bizcamp AI!本指南将帮助您快速上手并了解软件的基本功能和操作步骤。<br>
                Bizcamp AI开发,彻底改变了我们生成和处理信息的方式。无论您是作家、营销人员还是学生,这项技术都能让您的生活更轻松、更高效。凭借其自然语言处理能力,AI 可以帮助您编写内容、回答问题，甚至为您的项目创建大纲。
                在这篇博文中，我们将讨论充分发挥 AI 潜力的提示和技巧。从了解它的局限性到跳出框框思考，这些技巧将帮助您充分利用这个强大的工具。因此，无论您是经验丰富的专业人士还是新手，请继续阅读以了解如何帮助您实现目标。<br>
            </div>
            <h2>按钮功能介绍</h2>
            <p><img src="/imgs/illustrate/01.png" alt="" class="btns"></p>
            <p>停止生成</p>
            <div>
                为用户提供了更大的控制和灵活性，使用户能够根据自己的需求和情况来管理正在进行的对话。
                例如:如果Bizcamp AI的回复已经回答了您想要的结果,可以点击停止生成,Bizcamp AI就会停止回答。<br>
            </div>
            <p>清除记录</p>
            <div>
                为用户提供了更大的隐私和安全保护,使用户能够更好地控制自己的信息和数据。(清除之后找不到之前的记录)例如,在使用Bizcamp
                AI网页时,用户可能不希望他们的对话历史被保存,因此他们可以使用清楚记录功能来删除这些信息。<br>
            </div>
            <p>提示词案例</p>
            <div>
                为用户提供相关的提示或建议，帮助用户更快、更准确地完成特定的任务或操作。
                点击提示词案例的时候会出现弹出框，可以选择您需要的提示词来进行下一步操作。<br>
            </div>
            <p><img src="/imgs/illustrate/02.png" alt="" class="prompt"></p>
            <p>优化提示词</p>
            <div> 对于用户来讲，为了得到高质量的答案，每次要从不同的角度，用不同的修饰词来回调整提示词很多次，很浪费时间。优化提示词就能够解决这个问题，只需要调整和完善提示词就能得到高质量的答案。<br></div>
            <p><img src="/imgs/illustrate/03.png" alt="" class="cueword"></p>
            <h2>毕至AI助手</h2>
            <div>
                毕至AI助手是一款基于先进人工智能技术的智能助手。它能够理解并回应用户的需求。毕至AI助手提供了一系列功能。用户可以文字方式向毕至AI助手提问,它会根据用户的问题提供准确的答案。此外,毕至AI助手可以学习用户的习惯和偏好,为用户提供个性化的服务。无论是在工作、学习还是日常生活中,毕至AI助手都能为用户带来极大的便利。<br>
            </div>
            <p>对话模式</p>
            <div> 1. 您可以选择进入对话模式。在对话模式中您可以选择AI模型和AI创造力。<br></div>
            <p><img src="/imgs/illustrate/04.png" alt="" class="BiZhi"></p>
            <div>
                2. AI模型分为基础版和专业版,根据您的需求选择相应的版本。<br>
                AI模型基础版,提供了基本的知识和工具:而AI模型专业版,提供了更深入和全面的学习和应用资源。选择哪个版本取决于用户的背景和需求,以及对于AI模型训练和应用的深度和广度的期望。
            </div>
            <p><img src="/imgs/illustrate/05.png" alt="" class="BiZhi"></p>
            <div>
                3.AI创造力分为保守模式,均衡模式和创造模式,根据您的需求选择相应的版本。<br>
                AI创造力中的保守模式是指一种机制,它使得AI系统在生成创造性内容时更加谨慎和保守。这种模式的引入是为了避免AI系统生成过于冒险或不合理的创意,从而提高生成内容的可接受性和可靠性。<br>
                AI创造力中的均衡模式是一种机制,旨在平衡创造性和可接受性之间的关系。它通过在生成创造性内容时考虑多个因素,以确保生成的内容既具有创新性和独特性,又符合人类的期望和需求。<br>
                AI创造力中的创造模式是指一种机制,它使得AI系统能够生成创新性和独特性的内容。创造模式的引入旨在激发AI系统的创造力和想象力,使其能够产生新颖、非常规的创意,超越常规的思维和模式。<br>
            </div>
            <p><img src="/imgs/illustrate/06.png" alt="" class="BiZhi"></p>
            <div>
                4. 在中下放文本框中输入需要问的问题,点击发送,Bizcamp AI将根据您的输入提供相应的回答。
            </div>
            <p><img src="/imgs/illustrate/07.png" alt="" class="sending"></p>
            <p>问答模式</p>
            <div>
                1. 您可以选择进入问答模式，在问答模式分为联网和离线两种模式，根据您的需求选择相应的模式。<br>
            </div>
            <p><img src="/imgs/illustrate/08.png" alt="" class="BiZhi"></p>
            <div>
                问答模式的联网是指AI系统在进行问答任务时,能够利用互联网上的信息资源来提供更准确、更全面的答案。这种模式的引入可以大大提高AI系统在问答任务中的表现,使其能够处理更复杂、更具挑战性的问题。<br>
                问答模式的离线是指AI系统在进行问答任务时,不依赖互联网,而是依赖预先储存的信息库或者通过机器学习模型预先训练好的知识来提供答案。这种模式的引入可以使AI系统在没有网络连接的环境中也能正常工作,提供持续的服务。<br>
                2. 在中下方文本框中输入需要问的问题,点击发送,Bizcamp AI将根据您的输入提供相应的回答。<br>
            </div>
            <p><img src="/imgs/illustrate/09.png" alt="" class="sending"></p>
            <h2>招聘AI助手</h2>
            <div>
                招聘AI助手是一款专门针对招聘流程设计的AI助手。它可以帮助企业自动化处理大量的招聘任务,如对应聘者简历打分、生成岗位面试题、团队角色理论等。它使用先进的自然语言处理和机器学习技术,可以理解并回应各种招聘相关的问题和需求。<br>
            </div>
            <p>简历打分</p>
            <div>
                招聘AI助手的简历打分是一种创新的技术,它使用人工智能和机器学习算法来评估和打分候选人的简历。这种技术可以帮助招聘团队更有效地筛选和评估候选人,节省大量的时间和资源。<br>
                这个系统会根据预设的标准和要求,如工作经验、教育背景、技能等,对每份简历进行评估和打分。这个过程是自动化的,可以在几秒钟内完成,比人工评估要快得多。<br>
                总的来说,招聘AI助手的简历打分是一种高效、准确的简历筛选工具,可以帮助企业找到最合适的候选人。<br>
            </div>
            <p><img src="/imgs/illustrate/10.png" alt="" class="post"></p>
            <p>面试题生成</p>
            <div>
                招聘AI助手的面试题生成是一种高效、智能的工具,可以帮助招聘团队更好地准备面试,提高面试的效率和质量。<br>
            </div>
            <p><img src="/imgs/illustrate/11.png" alt="" class="post"></p>
            <p>贝尔宾画像</p>
            <div>
                贝尔宾画像是一种评估团队成员角色的工具，它可以帮助理解每个人在团队中的优势和角色。会分析候选人的技能、经验、性格特征等信息，然后将其与贝尔宾团队角色理论进行匹配，生成一个贝尔宾画像。这个画像可以帮助招聘团队理解候选人可能在团队中扮演的角色，如实施者、协调者、创新者等。<br>
                总的来说,招聘AI助手的贝尔宾画像是一种强大的工具,可以帮助招聘团队更好地理解和评估候选人,以构建一个高效、平衡的团队角色画像。<br></div>
            <p><img src="/imgs/illustrate/12.png" alt="" class="post"></p>
            <p><img src="/imgs/illustrate/13.png" alt="" class="sending"></p>
            <h2>分类场景助手</h2>
            <div>
                分类场景助手通常具有强大的自定义功能，用户可以根据自己的需求设置分类规则，使得分类更加符合自己的需求。同时，分类场景助手也具有强大的学习能力，能够根据用户的行为和反馈不断优化分类规则，使得分类结果更加准确和个性化。<br>
            </div>
            <div class="classification">
                <p><img src="/imgs/illustrate/14.png" alt="" class="ification"></p>
                <p><img src="/imgs/illustrate/15.png" alt="" class="ification"></p>
            </div>
            <h2>帮助和支持</h2>
            <div>
                1. 如果您在使用过程中遇到问题或需要帮助，请查找网站上的帮助和支持页面。<br>
                2. 在帮助页面中，您可以找到用户手册、常见问题解答和联系我们团队的方式。<br>
                这是一个更详细的快速入门指南，帮助您快速了解在不同模式的基本操作。如需进一步了解每个模式的高级功能和更详细的操作步骤，请参考软件的网站上提供的帮助文档或联系软件的支持团队。祝您使用愉快！</div>
        </el-dialog>
    </div>
</template>

<script setup>
import { toRefs } from 'vue';
import store from '../../store/common-data';
let { isstrate } = toRefs(store.state)
</script>

<style lang="scss" scoped>
.instructions {
    :deep(.el-dialog) {
        margin-top: 5vh;
        border-radius: 20px;
        font-size: 16px;
        --el-dialog-bg-color: #3f266a;


        .el-dialog__title {
            color: white;

        }

        .el-dialog__body {
            color: white;
            letter-spacing: 1.5px;

            h1 {
                color: white;
                font-size: 38px;
                text-align: center;
                margin-bottom: 20px;
            }

            h2 {
                font-size: 28px;
                text-align: center;
                margin-bottom: 20px;

            }

            div {
                width: 1200px;
                font-size: 18px;
                margin: auto;
                line-height: 1.8;
                margin-bottom: 20px;
                color: rgb(240, 235, 235);
            }

            p {
                font-size: 24px;
                font-weight: 550;
                text-align: center;
                margin-bottom: 20px;
            }

            .classification {
                display: flex;
                justify-content: space-evenly;
            }

            .btns {
                width: 800px;
            }

            .prompt {
                width: 900px;
            }

            .cueword {
                width: 500px;
            }

            .BiZhi,
            .post {
                width: 250px;
            }

            .sending {
                width: 650px;
            }

            .ification {
                width: 260px;
            }
        }

    }
}
</style>