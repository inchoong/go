<?php 
require_once('lib/tcpdf/tcpdf.php'); 
date_default_timezone_set("PRC");

$json = json_decode( $_POST['content'] );
if($json){
	//实例化 
	$pdf = new TCPDF('P', 'mm', 'A4', true, 'UTF-8', false); 
	// 设置文档信息 
	$pdf->SetCreator('today.exformation.com.cn'); 
	$pdf->SetAuthor('today.exformation.com.cn'); 
	$pdf->SetTitle($json->today); 
	$pdf->SetSubject($json->today); 
	$pdf->SetKeywords($json->today); 

	// 设置页眉和页脚信息 
	$pdf->SetHeaderData('', 0, '今日|'.$json->today,'today.exformation.com.cn'); 
	$pdf->setFooterData('today.exformation.com.cn'); 
	// 设置页眉和页脚字体 
	$pdf->setHeaderFont(Array('droidsansfallback', '', '10')); 
	$pdf->setFooterFont(Array('helvetica', '', '8')); 
	// 设置默认等宽字体 
	$pdf->SetDefaultMonospacedFont('courier'); 
	// 设置间距 
	$pdf->SetMargins(15, 21, 15); 
	$pdf->SetHeaderMargin(5); 
	$pdf->SetFooterMargin(10); 
	$pdf->setCellHeightRatio(0.7);
	// 设置分页 
	$pdf->SetAutoPageBreak(TRUE, 25); 
	// set image scale factor 
	$pdf->setImageScale(1.25); 
	// set default font subsetting mode 
	$pdf->setFontSubsetting(true); 
	//设置字体 
	$pdf->SetFont('droidsansfallback', '', 12); 
	$pdf->AddPage();

	$content = renderHead($json);
	$content .='<br/>';
	foreach ($json->tasks as $item) {
		$content = $content.render(
			$item->title,
			$item->completedAt,
			$item->duration,
			$item->memo
		);
	}

	$pdf->writeHTML($content);
	//输出PDF 
	$pdf->Output('t.pdf', 'I');
}

function renderHead($data){
	return '<div>'.
		'任务总数<span style="color:red"> '.$data->total.'</span>，'.
		'已完成<span style="color:red"> '.$data->done.'</span>，'.
		'累计工作时间<span style="color:red"> '.$data->duration.'</span>'.
		'</div>';
}

function render($title,$compelted_at, $duration,$memo){
	$result = '<div style="border-bottom:1px solid #ddd;">';
	if($compelted_at){
		$result .= '<div style="font-size:14px;text-decoration:line-through;">'.$title.'</div>'.
		'<div style="font-size:12px;color:#999;">完成于'.$compelted_at.', 总耗时'.$duration.'</div>';
	}else{
		$result .= '<div style="font-size:14px;color:red">'.$title.'</div>'.
		'<div style="font-size:12px;color:#999;">尚未完成, 已耗时'.$duration.'</div>';
	}
	if($memo){
		$result.='<div style="font-size:11px;color:#999;line-height:150%;">'.$memo.'</div>';
	}
	$result.='</div>';
	return $result;
}
?>