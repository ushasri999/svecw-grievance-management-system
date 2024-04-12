import React from 'react';

function CheckboxAlignment({ onCheckboxChange, selectedCheckboxes }) {
    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        onCheckboxChange(value);
      };
    
    
    return (
        <div className="flex "> {/* Aligns content to the right */}
            <div className="filter-wrap">
              <section className="challenge-list-filter">
                <div className="filter-group">
                  <div className="group-label font-bold">Status</div>
                  <div className="filters">
                    <div className="ui-checklist" role="group">
                      <div className="ui-checklist-list space-y-2">
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                              <input
                            type="checkbox"
                            className="checkbox-input mr-2"
                            value="Completed"
                            onChange={handleCheckboxChange}
                            checked={selectedCheckboxes.includes('Completed')}
                          />
                                <span className="label">Completed</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                              <input
                            type="checkbox"
                            className="checkbox-input mr-2"
                            value="Inompleted"
                            onChange={handleCheckboxChange}
                            checked={selectedCheckboxes.includes('Incompleted')}
                          />
                                <span className="label">Incompleted</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="filter-group">
                  <div className="group-label font-bold">Room</div>
                  <div className="filters">
                    <div className="ui-checklist" role="group">
                      <div className="ui-checklist-list space-y-2">
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                              <input
                            type="checkbox"
                            className="checkbox-input mr-2"
                            value="Bhargavi"
                            onChange={handleCheckboxChange}
                            checked={selectedCheckboxes.includes('Bhargavi')}
                          />
                                <span className="label">Bhargavi</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                              <input
                            type="checkbox"
                            className="checkbox-input mr-2"
                            value="Bhuvana"
                            onChange={handleCheckboxChange}
                            checked={selectedCheckboxes.includes('Bhuvana')}
                          />
                                <span className="label">Bhuvana</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                              <input
                            type="checkbox"
                            className="checkbox-input mr-2"
                            value="Nirmala"
                            onChange={handleCheckboxChange}
                            checked={selectedCheckboxes.includes('Nirmala')}
                          />
                                <span className="label">Nirmala</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                              <input
                            type="checkbox"
                            className="checkbox-input mr-2"
                            value="Neelima"
                            onChange={handleCheckboxChange}
                            checked={selectedCheckboxes.includes('Neelima')}
                          />
                                <span className="label">Neelima</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                              <input
                            type="checkbox"
                            className="checkbox-input mr-2"
                            value="Mrudula"
                            onChange={handleCheckboxChange}
                            checked={selectedCheckboxes.includes('Mrudula')}
                          />
                                <span className="label">Mrudula</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                              <input
                            type="checkbox"
                            className="checkbox-input mr-2"
                            value="Manasa"
                            onChange={handleCheckboxChange}
                            checked={selectedCheckboxes.includes('Manasa')}
                          />
                                <span className="label">Manasa</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                              <input
                            type="checkbox"
                            className="checkbox-input mr-2"
                            value="Revathi"
                            onChange={handleCheckboxChange}
                            checked={selectedCheckboxes.includes('Revathi')}
                          />
                                <span className="label">Revathi</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                              <input
                            type="checkbox"
                            className="checkbox-input mr-2"
                            value="Rohini"
                            onChange={handleCheckboxChange}
                            checked={selectedCheckboxes.includes('Rohini')}
                          />
                                <span className="label">Rohini</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                              <input
                            type="checkbox"
                            className="checkbox-input mr-2"
                            value="Pallavi"
                            onChange={handleCheckboxChange}
                            checked={selectedCheckboxes.includes('Pallavi')}
                          />
                                <span className="label">Pallavi</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
        </div>
    );
}

export default CheckboxAlignment;
