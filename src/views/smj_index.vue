<!-- 数据集首页 -->
<template>
    <div class=''>
        <template_show>
            <template v-slot:title>
                <h1 style="font-size: 40px;">{{ title_content }}</h1>
            </template>
            <template v-slot:subtitle>
                <p style="font-size: 20px;margin: 40px 60px;">{{ subtitle_content }}</p>
            </template>
        </template_show>

        <!-- mvpdiff    数据集展示+link -->
        <smj_dataset_template>
            <template v-slot:example_show>
                <el-row style="text-align: center;font-size: 200%;">
                    {{ mvpdiff_title }}
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in mvpdiff_images" :key="index">
                        <el-image :src="require(`@/assets/mvpdiff/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in mvpdiff_images_mask" :key="index">
                        <el-image :src="require(`@/assets/mvpdiff/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
            </template>
            <template v-slot:example_description>
                <el-row></el-row>
            </template>
            <template v-slot:dataset_link>
                <el-row style="text-align: start;font-size: 120%;">
                    <el-col :push="2" :span="4">
                        <el-row>
                            mvpdiff下载链接
                        </el-row>
                        <el-row>
                            <el-link type="primary" href="">GoogleDriver</el-link>
                        </el-row>
                    </el-col>
                </el-row>
            </template>
        </smj_dataset_template>
        <!-- retinal_vessels    数据集展示+link -->
        <smj_dataset_template>
            <template v-slot:example_show>
                <el-row style="text-align: center;font-size: 200%;">
                    {{ retinal_vessels_title }}
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in retinal_vessels_imgs" :key="index">
                        <el-image style="height: 180px;" :src="require(`@/assets/retinal_vessels/${imageName}`)"
                            fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in retinal_vessels_imgs_mask" :key="index">
                        <el-image style="height: 180px;" :src="require(`@/assets/retinal_vessels/${imageName}`)"
                            fit="cover" />
                    </el-col>
                </el-row>
            </template>
            <template v-slot:example_description>
                <el-row></el-row>
            </template>
            <template v-slot:dataset_link>
                <el-row style="text-align: start;font-size: 120%;">
                    <el-col :push="2" :span="4">
                        <el-row>
                            retinal_vessels下载链接
                        </el-row>
                        <el-row>
                            <el-link type="primary" href="">GoogleDriver</el-link>
                        </el-row>
                    </el-col>
                </el-row>
            </template>
        </smj_dataset_template>
        <!-- 息肉    数据集展示+link -->
        <smj_dataset_template>
            <template v-slot:example_show>
                <el-row style="text-align: center;font-size: 200%;">
                    {{ xirou_title }}
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in xirou_imgs" :key="index">
                        <el-image :src="require(`@/assets/息肉/img/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in xirou_imgs_mask" :key="index">
                        <el-image style="" :src="require(`@/assets/息肉/mask/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
            </template>
            <template v-slot:example_description>
                <el-row></el-row>
            </template>
            <template v-slot:dataset_link>
                <el-row style="text-align: start;font-size: 120%;">
                    <el-col :push="2" :span="4">
                        <el-row>
                            息肉数据集下载链接
                        </el-row>
                        <el-row>
                            <el-link type="primary" href="">GoogleDriver</el-link>
                        </el-row>
                    </el-col>
                </el-row>
            </template>
        </smj_dataset_template>
        <!-- VTON 
            cloth
            cloth_mask
            cloth_warp
            cloth_warp_mask
            cloth_sketch
            img
            img_agnostic
            img_parse
            img_parse_agnostic
            img_densepose
            openpose
        -->
        <!-- VTON-HD    数据集展示+link -->
        <smj_dataset_template>
            <template v-slot:example_show>
                <el-row style="text-align: center;font-size: 200%;">
                    {{ vton_title }}
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in vton.image" :key="index">
                        <el-image style="" :src="require(`@/assets/VTON-HD/image/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in vton.image_parse" :key="index">
                        <el-image style="" :src="require(`@/assets/VTON-HD/image_parse/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
            </template>
            <template v-slot:example_description>
                <el-row></el-row>
            </template>
            <template v-slot:dataset_link>
                <el-row style="text-align: start;font-size: 120%;">
                    <el-col :push="2" :span="8">
                        <el-row>
                            VTON-HD && DressCode数据集下载链接
                        </el-row>
                        <el-row>
                            <el-link type="primary" href="">GoogleDriver:VTON-HD</el-link>
                        </el-row>
                        <el-row>
                            <el-link type="primary" href="">GoogleDriver:DressCode</el-link>
                        </el-row>
                    </el-col>
                </el-row>
            </template>
        </smj_dataset_template>
        <smj_dataset_template v-if="false">
            <template v-slot:example_show>
                <el-row style="text-align: center;font-size: 200%;">
                    VTON-HD-数据展示
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in vton.cloth" :key="index">
                        <el-image :src="require(`@/assets/VTON-HD/cloth/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in vton.cloth_mask" :key="index">
                        <el-image style="" :src="require(`@/assets/VTON-HD/cloth_mask/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in vton.cloth_warp" :key="index">
                        <el-image :src="require(`@/assets/VTON-HD/cloth_warp/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in vton.cloth_warp_mask" :key="index">
                        <el-image style="" :src="require(`@/assets/VTON-HD/cloth_warp_mask/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in vton.cloth_sketch" :key="index">
                        <el-image style="" :src="require(`@/assets/VTON-HD/cloth_sketch/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in vton.image" :key="index">
                        <el-image style="" :src="require(`@/assets/VTON-HD/image/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in vton.image_agnostic" :key="index">
                        <el-image style="" :src="require(`@/assets/VTON-HD/image_agnostic/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in vton.image_parse" :key="index">
                        <el-image style="" :src="require(`@/assets/VTON-HD/image_parse/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in vton.image_parse_agnostic" :key="index">
                        <el-image style="" :src="require(`@/assets/VTON-HD/image_parse_agnostic/${imageName}`)"
                            fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in vton.image_densepose" :key="index">
                        <el-image style="" :src="require(`@/assets/VTON-HD/image_densepose/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in vton.openpose" :key="index">
                        <el-image style="" :src="require(`@/assets/VTON-HD/openpose/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
            </template>
            <template v-slot:example_description>
                <el-row></el-row>
            </template>
            <template v-slot:dataset_link>
                <el-row style="text-align: start;font-size: 120%;">
                    <el-col :push="2" :span="8">
                        <el-row>
                            VTON-HD数据集下载链接
                        </el-row>
                        <el-row>
                            <el-link type="primary" href="">GoogleDriver</el-link>
                        </el-row>
                    </el-col>
                </el-row>
            </template>
        </smj_dataset_template>
        <!--DressCode 
            images
            dense
            keypoints
            label_maps
            skeletons
         -->
        <!-- DressCode    数据集展示+link -->
        <smj_dataset_template v-if="false   ">
            <template v-slot:example_show>
                <el-row style="text-align: center;font-size: 200%;">
                    DressCode-数据展示
                </el-row>
                <!-- Dresses -->
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.dresses.image" :key="index">
                        <el-image :src="require(`@/assets/DressCode/dresses/images/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.dresses.label_maps" :key="index">
                        <el-image style="" :src="require(`@/assets/DressCode/dresses/label_maps/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>

            </template>
            <template v-slot:example_description>
                <el-row></el-row>
            </template>
            <template v-slot:dataset_link>
                <el-row style="text-align: start;font-size: 120%;">
                    <el-col :push="2" :span="8">
                        <el-row>
                            DressCode数据集下载链接
                        </el-row>
                        <el-row>
                            <el-link type="primary" href="">GoogleDriver</el-link>
                        </el-row>
                    </el-col>
                </el-row>
            </template>
        </smj_dataset_template>
        <smj_dataset_template v-if="false">
            <template v-slot:example_show>
                <el-row style="text-align: center;font-size: 200%;">
                    DressCode-数据展示
                </el-row>
                <!-- Dresses -->
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.dresses.image" :key="index">
                        <el-image :src="require(`@/assets/DressCode/dresses/images/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.dresses.cloth" :key="index">
                        <el-image style="" :src="require(`@/assets/DressCode/dresses/images/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.dresses.dense" :key="index">
                        <el-image :src="require(`@/assets/DressCode/dresses/dense/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.dresses.label_maps" :key="index">
                        <el-image style="" :src="require(`@/assets/DressCode/dresses/label_maps/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.dresses.skeletons" :key="index">
                        <el-image style="" :src="require(`@/assets/DressCode/dresses/skeletons/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <!-- upper_body -->
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.upper_body.image" :key="index">
                        <el-image :src="require(`@/assets/DressCode/upper_body/images/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.upper_body.cloth" :key="index">
                        <el-image style="" :src="require(`@/assets/DressCode/upper_body/images/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.upper_body.dense" :key="index">
                        <el-image :src="require(`@/assets/DressCode/upper_body/dense/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.upper_body.label_maps" :key="index">
                        <el-image style="" :src="require(`@/assets/DressCode/upper_body/label_maps/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.upper_body.skeletons" :key="index">
                        <el-image style="" :src="require(`@/assets/DressCode/upper_body/skeletons/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <!-- lower_body -->
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.lower_body.image" :key="index">
                        <el-image :src="require(`@/assets/DressCode/lower_body/images/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.lower_body.cloth" :key="index">
                        <el-image style="" :src="require(`@/assets/DressCode/lower_body/images/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.lower_body.dense" :key="index">
                        <el-image :src="require(`@/assets/DressCode/lower_body/dense/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.lower_body.label_maps" :key="index">
                        <el-image style="" :src="require(`@/assets/DressCode/lower_body/label_maps/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin: 10px 0px;" type="flex" justify="center">
                    <el-col :span="4" v-for="(imageName, index) in dress_code.lower_body.skeletons" :key="index">
                        <el-image style="" :src="require(`@/assets/DressCode/lower_body/skeletons/${imageName}`)" fit="cover" />
                    </el-col>
                </el-row>

            </template>
            <template v-slot:example_description>
                <el-row></el-row>
            </template>
            <template v-slot:dataset_link>
                <el-row style="text-align: start;font-size: 120%;">
                    <el-col :push="2" :span="8">
                        <el-row>
                            DressCode数据集下载链接
                        </el-row>
                        <el-row>
                            <el-link type="primary" href="">GoogleDriver</el-link>
                        </el-row>
                    </el-col>
                </el-row>
            </template>
        </smj_dataset_template>
    </div>
</template>

<script>
import template_show from '../components/template_show.vue';
import smj_dataset_template from '../components/smj_dataset_template.vue'
export default {
    components: {
        template_show,
        smj_dataset_template,
    },
    data() {
        return {
            title_content: '分割模型的训练样本自动生成',
            subtitle_content: '针对样本稀少且难以标注的分割任务，如工业图像缺陷样本（缺陷发生概率低）、医疗样本（标注需要专业医师）等等，本项目计划基于 Stable Diffusion 模型，同时自动生成多样的样本图片和对应的精准的像素级标注，为下游任务提供无限量的训练样本。',
            mvpdiff_title:'工业缺陷检测场景',
            retinal_vessels_title:'眼底血管场景',
            xirou_title:'内窥镜息肉场景',
            vton_title:'虚拟换衣场景',
            mvpdiff_images: [],
            mvpdiff_images_mask: [],
            retinal_vessels_imgs: [],
            retinal_vessels_imgs_mask: [],
            retinal_vessels_all: [],
            xirou_imgs: [],
            xirou_imgs_mask: [],
            vton: {
                cloth: [],
                cloth_mask: [],
                cloth_warp: [],
                cloth_warp_mask: [],
                cloth_sketch: [],
                image: [],
                image_agnostic: [],
                image_parse: [],
                image_parse_agnostic: [],
                image_densepose: [],
                openpose: []
            },
            dress_code: {
                dresses: {
                    image: [],
                    cloth: [],
                    dense: [],
                    label_maps: [],
                    skeletons: [],
                },
                upper_body: {
                    image: [],
                    cloth: [],
                    dense: [],
                    label_maps: [],
                    skeletons: [],
                },
                lower_body: {
                    image: [],
                    cloth: [],
                    dense: [],
                    label_maps: [],
                    skeletons: [],
                }
            }
        }
    },
    methods: {
        get_data_from_mvpdiff() {

            const path = require("path");
            // 使用require.context读取assets/images目录下的所有图片
            const imagesContext = require.context('@/assets/mvpdiff', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                if (name.includes('mask')) {
                    this.mvpdiff_images_mask.push(name)
                } else {
                    this.mvpdiff_images.push(name)
                }
            });
            this.mvpdiff_images = this.mvpdiff_images.slice(0, 5)
            this.mvpdiff_images_mask = this.mvpdiff_images_mask.slice(0, 5)
        },
        get_data_from_retinal_vessels() {
            const path = require("path");
            // 使用require.context读取assets/images目录下的所有图片
            const imagesContext = require.context('@/assets/retinal_vessels', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                // this.imagePaths.push(imagesContext(key));
                const name = path.basename(key);
                // console.log(name);
                if (name.includes('label')) {
                    this.retinal_vessels_imgs_mask.push(name)
                } else {
                    this.retinal_vessels_imgs.push(name)
                }
            });
            this.retinal_vessels_imgs = this.retinal_vessels_imgs.slice(0, 5)
            this.retinal_vessels_imgs_mask = this.retinal_vessels_imgs_mask.slice(0, 5)
            console.log(this.retinal_vessels_imgs_mask)
        },
        get_data_from_xirou() {

            const path = require("path");
            // 使用require.context读取assets/images目录下的所有图片
            let imagesContext = require.context('@/assets/息肉/img', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.xirou_imgs.push(name)
            });
            this.xirou_imgs = this.xirou_imgs.slice(0, 5)

            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/息肉/mask', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.xirou_imgs_mask.push(name)
            });
            this.xirou_imgs_mask = this.xirou_imgs_mask.slice(0, 5)
        },
        get_data_from_vton() {
            const path = require("path");
            // 使用require.context读取assets/images目录下的所有图片
            let imagesContext = require.context('@/assets/VTON-HD/cloth', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.vton.cloth.push(name)
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/VTON-HD/cloth_mask', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.vton.cloth_mask.push(name)
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/VTON-HD/cloth_sketch', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.vton.cloth_sketch.push(name)
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/VTON-HD/cloth_warp', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.vton.cloth_warp.push(name)
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/VTON-HD/cloth_warp_mask', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.vton.cloth_warp_mask.push(name)
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/VTON-HD/image', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.vton.image.push(name)
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/VTON-HD/image_agnostic', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.vton.image_agnostic.push(name)
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/VTON-HD/image_densepose', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.vton.image_densepose.push(name)
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/VTON-HD/image_parse', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.vton.image_parse.push(name)
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/VTON-HD/image_parse_agnostic', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.vton.image_parse_agnostic.push(name)
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/VTON-HD/openpose', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.vton.openpose.push(name)
            });
        },
        get_data_from_dress_code() {
            const path = require("path");
            // ##############<<Dresses>>#################################
            // 使用require.context读取assets/images目录下的所有图片
            let imagesContext = require.context('@/assets/DressCode/dresses/images', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                if (name.includes('_0')) {
                    this.dress_code.dresses.image.push(name)
                } else {
                    // _1 : cloth
                    this.dress_code.dresses.cloth.push(name)
                }
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/DressCode/dresses/dense', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.dress_code.dresses.dense.push(name)
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/DressCode/dresses/label_maps', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.dress_code.dresses.label_maps.push(name)
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/DressCode/dresses/skeletons', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.dress_code.dresses.skeletons.push(name)
            });
            // ##############<<upper_body>>#################################
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/DressCode/upper_body/images', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                if (name.includes('_0')) {
                    this.dress_code.upper_body.image.push(name)
                } else {
                    // _1 : cloth
                    this.dress_code.upper_body.cloth.push(name)
                }
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/DressCode/upper_body/dense', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.dress_code.upper_body.dense.push(name)
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/DressCode/upper_body/label_maps', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.dress_code.upper_body.label_maps.push(name)
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/DressCode/upper_body/skeletons', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.dress_code.upper_body.skeletons.push(name)
            });
            // ##############<<lower_body>>#################################
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/DressCode/lower_body/images', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                if (name.includes('_0')) {
                    this.dress_code.lower_body.image.push(name)
                } else {
                    // _1 : cloth
                    this.dress_code.lower_body.cloth.push(name)
                }
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/DressCode/lower_body/dense', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.dress_code.lower_body.dense.push(name)
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/DressCode/lower_body/label_maps', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.dress_code.lower_body.label_maps.push(name)
            });
            // 使用require.context读取assets/images目录下的所有图片
            imagesContext = require.context('@/assets/DressCode/lower_body/skeletons', false, /\.(png|jpe?g|gif|svg)$/);
            // 遍历require.context返回的模块，获取每张图片的路径并放入数组中
            imagesContext.keys().forEach(key => {
                const name = path.basename(key);
                this.dress_code.lower_body.skeletons.push(name)
            });
        },
    },
    computed: {},
    watch: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.get_data_from_mvpdiff()
        this.get_data_from_retinal_vessels()
        this.get_data_from_xirou()
        this.get_data_from_vton()
        this.get_data_from_dress_code()
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    //生命周期 - 创建之前
    beforeCreate() {

    },
    //生命周期 - 挂载之前
    beforeMount() {

    },
    //生命周期 - 更新之前
    beforeUpdate() {

    },
    //生命周期 - 更新之后
    updated() {

    },
    //生命周期 - 销毁之前
    beforeDestroy() {

    },
    //生命周期 - 销毁完成
    destroyed() {

    },
    //如果页面有keep-alive缓存功能，这个函数会触发
    activated() {

    },
}
</script>
<style scoped></style>