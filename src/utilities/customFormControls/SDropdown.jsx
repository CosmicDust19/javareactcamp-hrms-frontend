import {defDropdownStyle} from "../Utils";
import {Dropdown} from "semantic-ui-react";
import React from "react";

function SDropdown({name, formik, ...props}) {

    const meta = formik.getFieldMeta(name)

    return (
        <Dropdown clearable item search selection multiple selectOnBlur={false}
                  loading={props.options === 0}
                  value={meta.value}
                  style={defDropdownStyle}
                  onChange={(event, data) => formik.setFieldValue(name, data.value)}
                  {...props}
        />
    )
}

export default SDropdown;
