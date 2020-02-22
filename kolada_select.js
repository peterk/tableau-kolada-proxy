$(document).ready(function () {
      for (var i = 0, len = kpilist.length; i < len; i++) {
	  kpi = kpilist[i]
	  $('#my-select').multiSelect('addOption', { value: kpi.id, text: kpi.id + " " + kpi.title });
      }
});



$('#my-select').multiSelect({
    selectableHeader: "<input type='text' class='search-input' autocomplete='off' placeholder='Sök KPI'>",
    selectionHeader: "<p>Valda KPI:er</p>",
    afterInit: function(ms){
      var that = this,
          $selectableSearch = that.$selectableUl.prev(),
          selectableSearchString = '#'+that.$container.attr('id')+' .ms-elem-selectable:not(.ms-selected)';
  
      that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
      .on('keydown', function(e){
        if (e.which === 40){
          that.$selectableUl.focus();
          return false;
        }
      });
    },
    afterSelect: function(){
      this.qs1.cache();
    },
     afterDeselect: function(){
       this.qs1.cache();
     }
  });
