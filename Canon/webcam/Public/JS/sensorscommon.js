var sensors = window['sensorsDataAnalytic201505'];
sensors.init({
    preset_properties: {
        url: true,
        title: true,
    },
    server_url: 'https://datasink.canon.sensorsdatavip.com/sa?project=production',
    heatmap: {
        scroll_notice_map: 'default',
        clickmap: 'default',
        // collect_element: function(element_target){
        //     // 如果元素有属性sensors-disable=true时候，全埋点不采集，只采集自定义点击事件。
        //     if(element_target.getAttribute('sensors-disable') != null){
        //         return false;
        //     }else{
        //         return true;
        //     }
        // },
    },
    show_log:false,
    source_channel: ['smt_cp', 'smt_pl', 'smt_md'],
});


