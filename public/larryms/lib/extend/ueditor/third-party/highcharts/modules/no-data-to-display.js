(function(a){function t(){return!!this.points.length}function o(){this.hasData()?this.hideNoData():this.showNoData()}var n=a.seriesTypes,i=a.Chart.prototype,e=a.getOptions(),s=a.extend;s(e.lang,{noData:"No data to display"});e.noData={position:{x:0,y:0,align:"center",verticalAlign:"middle"},attr:{},style:{fontWeight:"bold",fontSize:"12px",color:"#60606a"}};n.pie.prototype.hasData=t;if(n.gauge)n.gauge.prototype.hasData=t;if(n.waterfall)n.waterfall.prototype.hasData=t;a.Series.prototype.hasData=function(){return this.dataMax!==void 0&&this.dataMin!==void 0};i.showNoData=function(t){var a=this.options,t=t||a.lang.noData,a=a.noData;if(!this.noDataLabel)this.noDataLabel=this.renderer.label(t,0,0,null,null,null,null,null,"no-data").attr(a.attr).css(a.style).add(),this.noDataLabel.align(s(this.noDataLabel.getBBox(),a.position),!1,"plotBox")};i.hideNoData=function(){if(this.noDataLabel)this.noDataLabel=this.noDataLabel.destroy()};i.hasData=function(){for(var t=this.series,a=t.length;a--;)if(t[a].hasData()&&!t[a].options.isInternal)return!0;return!1};i.callbacks.push(function(t){a.addEvent(t,"load",o);a.addEvent(t,"redraw",o)})})(Highcharts);